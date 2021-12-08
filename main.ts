let line_finder = 0
basic.forever(function () {
    line_finder = pins.analogReadPin(AnalogPin.P0)
    if (line_finder >= 500) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    basic.pause(2000)
})
