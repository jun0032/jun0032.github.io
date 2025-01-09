open Uints

module Make (Bus : Word_addressable_intf.S) = struct

  module Fetch_and_decode = Fetch_and_decode.Make(Bus)

  type t = {
    registers                            : Registers.t;
    bus                                  : Bus.t;
    ic                                   : Interrupt_controller.t;
    mutable pc                           : uint16;
    mutable sp                           : uint16;
    mutable halted                       : bool;
    mutable ime                          : bool; (* interrupt master enable *)
    mutable enable_ime_before_next_instr : bool;
    mutable prev_inst                    : Instruction.t; (* for debugging purpose *)
  }

  let create ~bus ~ic ~registers ~sp ~pc ~halted ~ime =
    {
      registers;
      bus;
      ic;
      sp;
      pc;
      halted;
      ime;
      enable_ime_before_next_instr = false;
      prev_inst = NOP;
    }

  type next_pc = Next | Jump of uint16

  let execute (t : t) (inst_info : Inst_info.t) : int =
    let open Inst_info in
    let {len=_; mcycles; inst} = inst_info in
    let {not_branched=not_branched_mcycles; branched=branched_mcycles} = mcycles in
    let set_flags = Registers.set_flags t.registers in
    let read : type a. a Instruction.arg -> a = fun arg ->
      match arg with
      | Immediate8 n -> n
      | Immediate16 n -> n
      | Direct8 addr -> Bus.read_byte t.bus addr
      | R r -> Registers.read_r t.registers r
      | RR_indirect rr ->
        let addr = Registers.read_rr t.registers rr in
        Bus.read_byte t.bus addr
      | FF00_offset n ->
        let addr = Uint16.(of_int 0xFF00 + of_uint8 n) in
        Bus.read_byte t.bus addr
      | FF00_C ->
        let c = Registers.read_r t.registers C in
        let addr = Uint16.(of_int 0xFF00 + of_uint8 c) in
        Bus.read_byte t.bus addr
      | HL_inc ->
        let addr = Registers.read_rr t.registers HL in
        Registers.write_rr t.registers HL Uint16.(succ addr);
        Bus.read_byte t.bus addr
      | HL_dec ->
        let addr = Registers.read_rr t.registers HL in
        Registers.write_rr t.registers HL Uint16.(pred addr);
        Bus.read_byte t.bus addr
      | Direct16 addr -> Bus.read_word t.bus addr
      | RR rr -> Registers.read_rr t.registers rr
      | SP -> t.sp
      | SP_offset n ->
        let sp = t.sp |> Uint16.to_int in
        let n = n |> Int8.to_int in
        set_flags
          ~z:false
          ~h:(sp land 0xF + n land 0xF > 0xF)
          ~n:false
          ~c:(sp land 0xFF + n land 0xFF > 0xFF) ();
        sp + n |> Uint16.of_int
    in
    let write : type a. a Instruction.arg -> a -> unit = fun x y ->
      match x with
      | R r -> Registers.write_r t.registers r y
      | RR rr -> Registers.write_rr t.registers rr y
      | FF00_offset n ->
        let addr = Uint16.(of_int 0xFF00 + of_uint8 n) in
        Bus.write_byte t.bus ~addr ~data:y
      | RR_indirect rr ->
        let addr = Registers.read_rr t.registers rr in
        Bus.write_byte t.bus ~addr ~data:y
      | FF00_C ->
        let c = Registers.read_r t.registers C in
        let addr = Uint16.(of_int 0xFF00 + of_uint8 c) in
        Bus.write_byte t.bus ~addr ~data:y
      | HL_inc ->
        let addr = Registers.read_rr t.registers HL in
        Bus.write_byte t.bus ~addr ~data:y;
        Registers.write_rr t.registers HL Uint16.(succ addr)
      | HL_dec ->
        let addr = Registers.read_rr t.registers HL in
        Bus.write_byte t.bus ~addr ~data:y;
        Registers.write_rr t.registers HL Uint16.(pred addr)
      | Direct8 addr -> Bus.write_byte t.bus ~addr ~data:y
      | Direct16 addr -> Bus.write_word t.bus ~addr ~data:y
      | SP -> t.sp <- y
      | SP_offset _
      | Immediate16 _
      | Immediate8 _ -> failwith @@ Printf.sprintf "Invalid arugment"
    in
    let (<--) x y = write x y in
    let check_condition t : Instruction.condition -> bool = function
      | None -> true
      | Z    -> Registers.read_flag t.registers Zero
      | NZ   -> not (Registers.read_flag t.registers Zero)
      | C    -> Registers.read_flag t.registers Carry
      | NC   -> not (Registers.read_flag t.registers Carry)
    in
    let next_pc = match inst with
      | LD8 (x, y) ->
        x <-- read y;
        Next
      | LD16 (x, y) ->
        x <-- read y;
        Next
      | ADD8 (x, y) ->
        let x', y' = read x, read y in
        let n = Uint8.(x' + y') in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0xF + y' land of_int 0xF > of_int 0xF)
          ~n:false
          ~c:Uint8.(x' > of_int 0xFF - y') ();
        x <-- n;
        Next
      | ADD16 (x, y) ->
        let x', y' = read x, read y in
        let n = Uint16.(x' + y') in
        set_flags
          ~h:Uint16.(x' land of_int 0x0FFF + y' land of_int 0x0FFF > of_int 0x0FFF)
          ~n:false
          ~c:Uint16.(x' > of_int 0xFFFF - y') ();
        x <-- n;
        Next
      | ADDSP y ->
        (* For "ADD SP, n" the flags are set as if the instruction was a 8 bit add.
         * This is because we only add the lower 8 bits *)
        let x' = read SP |> Uint16.to_int in
        let y' = y |> Int8.to_int in
        set_flags
          ~z:false
          ~h:(x' land 0xF + y' land 0xF > 0xF)
          ~n:false
          ~c:(x' land 0xFF + y' land 0xFF > 0xFF) ();
        SP <-- (x' + y'|> Uint16.of_int);
        Next
      | ADC (x, y) ->
        let c = if Registers.(read_flag t.registers Carry) then Uint8.one else Uint8.zero in
        let x', y' = read x, read y in
        let n = Uint8.(x' + y' + c) in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0xF + y' land of_int 0xF + c > of_int 0xF)
          ~n:false
          ~c:((Uint8.to_int x' + Uint8.to_int y' + Uint8.to_int c) > 0xFF) ();
        x <-- n;
        Next
      | SUB (x, y) ->
        let x', y' = read x, read y in
        let n = Uint8.(x' - y') in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0xF < y' land of_int 0xF)
          ~n:true
          ~c:((Uint8.to_int x') < Uint8.to_int y') ();
        x <-- n;
        Next
      | SBC (x, y) ->
        let c = if Registers.(read_flag t.registers Carry) then Uint8.one else Uint8.zero in
        let x', y' = read x, read y in
        let n = Uint8.(x' - (y' + c)) in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0xF < y' land of_int 0xF + c)
          ~n:true
          ~c:((Uint8.to_int x') < Uint8.to_int y' + Uint8.to_int c) ();
        x <-- n;
        Next
      | AND (x, y) ->
        let n = Uint8.(read x land read y) in
        set_flags ~z:(n = Uint8.zero) ~h:true ~n:false ~c:false ();
        x <-- n;
        Next
      | OR (x, y) ->
        let n = Uint8.(read x lor read y) in
        set_flags ~z:(n = Uint8.zero) ~h:false ~n:false ~c:false ();
        x <-- n;
        Next
      | XOR (x, y) ->
        let n = Uint8.(read x lxor read y) in
        set_flags ~z:(n = Uint8.zero) ~h:false ~n:false ~c:false ();
        x <-- n;
        Next
      | CP (x, y) ->
        let x', y' = read x, read y in
        let n = Uint8.(x' - y') in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0xF < y' land of_int 0xF)
          ~n:true
          ~c:((Uint8.to_int x') < Uint8.to_int y') ();
        Next
      | INC x ->
        let x' = (read x) in
        let n = Uint8.(succ x') in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0x0F = of_int 0x0F)
          ~n:false ();
        x <-- n;
        Next
      | INC16 x ->
        x <-- Uint16.(succ @@ read x);
        Next
      | DEC x ->
        let x' = (read x) in
        let n = Uint8.(pred x') in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:Uint8.(x' land of_int 0x0F = of_int 0x0)
          ~n:true ();
        x <-- n;
        Next
      | DEC16 x ->
        x <-- Uint16.(pred @@ read x);
        Next
      | SWAP x ->
        let x' = read x in
        let n = Uint8.((x' lsl 4) lor (x' lsr 4)) in
        set_flags
          ~z:(n = Uint8.zero)
          ~h:false ~c:false ~n:false ();
        x <-- n;
        Next
      | DAA ->
        let n_flag = Registers.read_flag t.registers Subtraction in
        let c_flag = Registers.read_flag t.registers Carry in
        let h_flag = Registers.read_flag t.registers Half_carry in
        let a = ref (Registers.read_r t.registers A) in
        let open Uint8 in
        begin match n_flag with
          | false ->
            if c_flag || !a > of_int 0x99 then begin
              a := !a + of_int 0x60;
              set_flags ~c:true ()
            end;
            if h_flag || (!a land of_int 0x0F) > of_int 0x09 then
              a := !a + of_int 0x06
          | true ->
            if c_flag then
              a := !a - of_int 0x60;
            if h_flag then
              a := !a - of_int 0x06;
        end;
        set_flags ~h:false ~z:(!a = zero) ();
        Registers.write_r t.registers A !a;
        Next
      | CPL ->
        set_flags ~n:true ~h:true ();
        Registers.read_r t.registers A
        |> (fun n -> Uint8.(n lxor max_int))
        |> Registers.write_r t.registers A;
        Next
      | CCF ->
        let c = Registers.read_flag t.registers Carry in
        set_flags ~n:false ~h:false ~c:(not c) ();
        Next
      | SCF ->
        set_flags ~n:false ~h:false ~c:true ();
        Next
      | NOP -> Next
      | HALT ->
        t.halted <- true;
        Next
      | STOP -> assert false;
      | DI ->
        (* DI cancels pending EI *)
        t.enable_ime_before_next_instr <- false;
        t.ime <- false;
        Next
      | EI ->
        t.enable_ime_before_next_instr <- true;
        Next
      | RLCA ->
        let a = Registers.read_r t.registers A in
        let c = Uint8.(a land of_int 0x80 <> zero) in
        let n = Uint8.((a lsl 1) lor if c then one else zero) in
        Registers.write_r t.registers A n;
        set_flags ~n:false ~h:false ~z:false ~c ();
        Next
      | RLA ->
        let a = Registers.read_r t.registers A in
        let old_c = Registers.read_flag t.registers Carry in
        let n = Uint8.((a lsl 1) lor if old_c then one else zero) in
        Registers.write_r t.registers A n;
        let new_c = Uint8.(a land of_int 0x80 <> zero) in
        set_flags ~n:false ~h:false ~z:false ~c:new_c ();
        Next
      | RRCA ->
        let a = Registers.read_r t.registers A in
        let c = Uint8.(a land of_int 1 <> zero) in
        let n = Uint8.((a lsr 1) lor if c then of_int 0x80 else zero) in
        Registers.write_r t.registers A n;
        set_flags ~n:false ~h:false ~z:false ~c:c ();
        Next
      | RRA ->
        let a = Registers.read_r t.registers A in
        let old_c = Registers.read_flag t.registers Carry in
        let n = Uint8.((a lsr 1) lor if old_c then of_int 0x80 else zero) in
        Registers.write_r t.registers A n;
        let new_c = Uint8.(a land of_int 0x1 <> zero) in
        set_flags ~n:false ~h:false ~z:false ~c:new_c ();
        Next
      | RLC x ->
        let x' = read x in
        let c = Uint8.(x' land of_int 0x80 <> zero) in
        let n = Uint8.((x' lsl 1) lor if c then one else zero) in
        x <-- n;
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c ();
        Next
      | RL x ->
        let x' = read x in
        let old_c = Registers.read_flag t.registers Carry in
        let n = Uint8.((x' lsl 1) lor if old_c then one else zero) in
        x <-- n;
        let new_c = Uint8.(x' land of_int 0x80 <> zero) in
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c:new_c ();
        Next
      | RRC x ->
        let x' = read x in
        let c = Uint8.(x' land of_int 1 <> zero) in
        let n = Uint8.((x' lsr 1) lor if c then of_int 0x80 else zero) in
        x <-- n;
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c ();
        Next
      | RR x ->
        let x' = read x in
        let old_c = Registers.read_flag t.registers Carry in
        let n = Uint8.((x' lsr 1) lor if old_c then of_int 0x80 else zero) in
        x <-- n;
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c:Uint8.(x' land of_int 0x1 <> zero) ();
        Next
      | SLA x ->
        let x' = read x in
        let n = Uint8.(x' lsl 1) in
        x <-- n;
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c:Uint8.(x' land of_int 0x80 <> zero) ();
        Next
      | SRA x ->
        let x' = read x in
        let n = Uint8.((x' lsr 1) lor (x' land of_int 0x80)) in
        x <-- n;
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c:Uint8.(x' land of_int 0x1 <> zero) ();
        Next
      | SRL x ->
        let x' = read x in
        let n = Uint8.(x' lsr 1) in
        x <-- n;
        set_flags ~n:false ~h:false ~z:Uint8.(n = zero) ~c:Uint8.(x' land of_int 0x1 <> zero) ();
        Next
      | BIT (n, x) ->
        let b = Uint8.(read x land (one lsl n) = zero) in
        set_flags ~n:false ~h:true ~z:b ();
        Next
      | SET (n, x) ->
        x <-- Uint8.(read x lor (one lsl n));
        Next
      | RES (n, x) ->
        let mask = Uint8.((one lsl n) lxor of_int 0b11111111) in
        x <-- Uint8.(read x land mask);
        Next
      | PUSH rr ->
        t.sp <- Uint16.(t.sp - of_int 2);
        Bus.write_word t.bus ~addr:t.sp ~data:(Registers.read_rr t.registers rr);
        Next
      | POP rr ->
        Registers.write_rr t.registers rr (Bus.read_word t.bus t.sp);
        t.sp <- Uint16.(t.sp + of_int 2);
        Next
      | JP (c, x) ->
        if check_condition t c then
          Jump (read x)
        else
          Next
      | JR (c, x) ->
        if check_condition t c then
          let addr = Uint16.to_int t.pc + Int8.to_int x |> Uint16.of_int in
          Jump addr
        else
          Next
      | CALL (c, x) ->
        if check_condition t c then begin
          t.sp <- Uint16.(t.sp - of_int 2);
          Bus.write_word t.bus ~addr:t.sp ~data:t.pc;
          Jump x
        end else
          Next
      | RST x ->
        t.sp <- Uint16.(t.sp - of_int 2);
        Bus.write_word t.bus ~addr:t.sp ~data:t.pc;
        Jump x
      | RET c ->
        if check_condition t c then begin
          let addr = Bus.read_word t.bus t.sp in
          t.sp <- Uint16.(t.sp + of_int 2);
          Jump addr
        end else
          Next
      | RETI  ->
        let addr = Bus.read_word t.bus t.sp in
        t.sp <- Uint16.(t.sp + of_int 2);
        t.ime <- true;
        Jump addr
    in
    t.prev_inst <- inst;
    match next_pc with
    | Next ->
      not_branched_mcycles
    | Jump addr ->
      t.pc <- addr;
      branched_mcycles

  let run_instruction t  =
    let fetch_decode_execute t =
      if t.halted then
        4
      else
        let inst_info = Fetch_and_decode.f t.bus ~pc:t.pc in
        t.pc <- Uint16.(t.pc + inst_info.len);
        execute t inst_info
    in
    let handle_interrupt t : int =
      match Interrupt_controller.next t.ic with
      | None -> 0
      | Some type_ ->
        t.halted <- false;
        if not t.ime then
          0
        else begin
          t.ime <- false;
          Interrupt_controller.clear t.ic type_;
          let addr =  match type_ with
            | VBlank      -> Uint16.(of_int 0x40)
            | LCD_stat    -> Uint16.(of_int 0x48)
            | Timer       -> Uint16.(of_int 0x50)
            | Serial_port -> Uint16.(of_int 0x58)
            | Joypad      -> Uint16.(of_int 0x60)
          in
          t.sp <- Uint16.(t.sp - of_int 2);
          Bus.write_word t.bus ~addr:t.sp ~data:t.pc;
          t.pc <- addr;
          5
        end
    in
    if t.enable_ime_before_next_instr then begin
      t.ime <- true;
      t.enable_ime_before_next_instr <- false
    end;
    let inst_mcycles = fetch_decode_execute t in
    let interrupt_mcycles = handle_interrupt t in
    inst_mcycles + interrupt_mcycles

  let show t =
    Printf.sprintf "%s SP:%s PC:%s"
      (Registers.show t.registers) (t.sp |> Uint16.show) (t.pc |> Uint16.show)

  module For_tests = struct

    let execute = execute

    let prev_inst t = t.prev_inst

  end

end
