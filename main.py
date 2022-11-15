def on_button_pressed_a():
    global conteo
    conteo = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

sensor_botella = 0
conteo = 0
conteo = 0
MAXBOTELLAS = 20

def on_forever():
    global sensor_botella, conteo
    sensor_botella = pins.analog_read_pin(AnalogPin.P1)
    if sensor_botella > 600:
        conteo += 1
        basic.show_number(conteo)
        led.plot_bar_graph(conteo, MAXBOTELLAS)
    basic.pause(500)
    if conteo == MAXBOTELLAS:
        basic.show_icon(IconNames.HAPPY)
        music.play_melody("C5 C5 C5 C5 B B B B ", 120)
        basic.clear_screen()
basic.forever(on_forever)
