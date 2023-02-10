let Bt = 0
let Ry = 0
let Rx = 0
let Ly = 0
let Lx = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    Lx = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_left_wi, Shaft.JOYSTICK_X_Shaft), 0, 256, -255, 255)
    Ly = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_left_wi, Shaft.JOYSTICK_Y_Shaft), 0, 256, -255, 255)
    Rx = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_right_wi, Shaft.JOYSTICK_X_Shaft), 0, 256, -255, 255)
    Ry = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_right_wi, Shaft.JOYSTICK_Y_Shaft), 0, 256, -255, 255)
    Bt = 0
    if (joystick.Gamepad_Status(barb_fitting.JOYSTICK_BUTOON_LEFT_L, key_status.JOYSTICK_PRESS_DOWN)) {
        Bt = 1
    }
    if (joystick.Gamepad_Status(barb_fitting.JOYSTICK_BUTOON_RIGHT_R, key_status.JOYSTICK_PRESS_DOWN)) {
        Bt = Bt + 2
    }
    if (joystick.Gamepad_Status(barb_fitting.JOYSTICK_BUTTON_LEFT, key_status.JOYSTICK_PRESS_DOWN)) {
        Bt = Bt + 4
    }
    if (joystick.Gamepad_Status(barb_fitting.JOYSTICK_BUTTON_RIGHT, key_status.JOYSTICK_PRESS_DOWN)) {
        Bt = Bt + 8
    }
    radio.sendValue("Lx", Math.trunc(Lx))
    radio.sendValue("Ly", Math.trunc(Ly))
    radio.sendValue("Rx", Math.trunc(Rx))
    radio.sendValue("Ry", Math.trunc(Ry))
    radio.sendValue("Bt", Bt)
    if (Ly > 0 && Lx == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Ly < 0 && Lx == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Ly == 0 && Lx > 0) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Ly == 0 && Lx < 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (Ly > 0 && Lx > 0) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . . . . .
            `)
    } else if (Ly > 0 && Lx < 0) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . .
            `)
    } else if (Ly < 0 && Lx > 0) {
        basic.showLeds(`
            . . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (Ly < 0 && Lx < 0) {
        basic.showLeds(`
            . . . . .
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
