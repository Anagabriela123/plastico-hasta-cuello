input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    conteo = 0
})
let sensor_botella = 0
let conteo = 0
basic.showIcon(IconNames.Heart)
conteo = 0
let MAX_BOTELLAS = 7
basic.forever(function () {
    if (conteo < MAX_BOTELLAS) {
        sensor_botella = sonar.ping(
        DigitalPin.P2,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        if (sensor_botella > 2 && sensor_botella < 4) {
            conteo += 1
            basic.showNumber(conteo)
            led.plotBarGraph(
            conteo,
            MAX_BOTELLAS
            )
        }
    } else {
        basic.pause(200)
        basic.showIcon(IconNames.Happy)
        music.playMelody("D E D F E F D E ", 120)
        basic.clearScreen()
    }
})
