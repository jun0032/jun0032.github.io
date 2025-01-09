open Camlboy_lib
module M = Mooneye_utils.Make(Mbc1)

let%expect_test "basic.gb" =
  M.run_test_rom_and_print_framebuffer "oam_dma/basic.gb";

  [%expect {|
    A:$00 F:ZN-- BC:$0305 DE:$080D HL:$1522 SP:$E000 PC:$486D
    008:-#######-----------------------------------###---#---#----------------------------------------------------------------------------------------------------------
    009:----#-----####-----###-----#--------------#---#--#--#-----------------------------------------------------------------------------------------------------------
    010:----#----#----#---#-------####------------#---#--#-#------------------------------------------------------------------------------------------------------------
    011:----#----######----##------#--------------#---#--###------------------------------------------------------------------------------------------------------------
    012:----#----#-----------#-----#--------------#---#--#--#-----------------------------------------------------------------------------------------------------------
    013:----#-----####----###------##--------------###---#---#---------------------------------------------------------------------------------------------------------- |}]
