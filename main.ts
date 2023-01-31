input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PA += 1
    rounds += 1
    UPDATE_SCORE()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    TIES += 1
    rounds += 1
    UPDATE_SCORE()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    PB += 1
    rounds += 1
    UPDATE_SCORE()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function UPDATE_SCORE () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine(" T: " + TIES)
    OLED.newLine()
    OLED.writeStringNewLine("PLAYER ROUNDS: " + rounds)
}
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    TIES = 0
    rounds = 0
    OLED.writeStringNewLine("lets play the game")
    basic.pause(2000)
    UPDATE_SCORE()
}
let PB = 0
let TIES = 0
let rounds = 0
let PA = 0
reset()
