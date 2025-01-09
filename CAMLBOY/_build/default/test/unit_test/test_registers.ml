include Camlboy_lib
open Uints
open StdLabels


let%expect_test "test write and read single register" =
  let t = Registers.create () in

  Registers.write_r t A (0xAB |> Uint8.of_int);
  let v = Registers.read_r t A in

  v
  |> Uint8.show
  |> Stdio.print_endline;
  [%expect {| $AB |}]

let%expect_test "test write and read register pair" =
  let t = Registers.create () in

  Registers.write_rr t BC (0xABCD |> Uint16.of_int);
  let v = Registers.read_rr t BC in

  v
  |> Uint16.show
  |> Stdio.print_endline;
  [%expect {| $ABCD |}]

let%expect_test "test write single and read register pair" =
  let t = Registers.create () in

  Registers.write_r t B (0xAB |> Uint8.of_int);
  Registers.write_r t C (0xCD |> Uint8.of_int);
  let v = Registers.read_rr t BC in

  v
  |> Uint16.show
  |> Stdio.print_endline;
  [%expect {| $ABCD |}]

let%expect_test "set and read flag" =
  let t = Registers.create () in

  Registers.set_flag t Carry;
  Registers.set_flag t Subtraction;
  let carry = Registers.read_flag t Carry in
  let half_carry = Registers.read_flag t Half_carry in
  let subtraction = Registers.read_flag t Subtraction in
  let zero = Registers.read_flag t Zero in

  [carry; half_carry; subtraction; zero]
  |> List.iter ~f:(Printf.printf "%b ");

  [%expect {|true false true false|}]

let%expect_test "set, unset and read flag" =
  let t = Registers.create () in

  Registers.set_flag t Carry;
  Registers.set_flag t Subtraction;
  Registers.set_flag t Half_carry;
  Registers.set_flag t Zero;
  Registers.unset_flag t Subtraction;
  Registers.unset_flag t Zero;
  let carry = Registers.read_flag t Carry in
  let half_carry = Registers.read_flag t Half_carry in
  let subtraction = Registers.read_flag t Subtraction in
  let zero = Registers.read_flag t Zero in

  [carry; half_carry; subtraction; zero]
  |> List.iter ~f:(Printf.printf "%b ");

  [%expect {|true true false false|}]


let%expect_test "set_flags" =
  let t = Registers.create () in

  Registers.set_flag t Carry;
  Registers.set_flags t ~c:false ~h:true ~n:true ~z:true ();

  let carry = Registers.read_flag t Carry in
  let half_carry = Registers.read_flag t Half_carry in
  let subtraction = Registers.read_flag t Subtraction in
  let zero = Registers.read_flag t Zero in

  [carry; half_carry; subtraction; zero]
  |> List.iter ~f:(Printf.printf "%b ");

  [%expect {|false true true true|}]
