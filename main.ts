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
let rounds = 0
let TIES = 0
let PB = 0
let PA = 0
OLED.init(128, 64)
PA = 0
PB = 0
TIES = 0
rounds = 0
OLED.writeStringNewLine("LETS PLAY A GAME DUMMY")
basic.pause(2000)
UPDATE_SCORE()
