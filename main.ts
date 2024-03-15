let counterOfSteps = 0
/**
 * Here we are declaring (set) a variable called counterOfSteps and assigning an initial value of zero (0).
 */
input.onButtonPressed(Button.A, function () {
    counterOfSteps = 0
})
input.onGesture(Gesture.Shake, function () {
    counterOfSteps += 1
    basic.showNumber(counterOfSteps)
})
