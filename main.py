stepCounter = 0

def on_button_pressed_a():
    global stepCounter
    stepCounter = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global stepCounter
    stepCounter += 1
    basic.show_number(stepCounter)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
