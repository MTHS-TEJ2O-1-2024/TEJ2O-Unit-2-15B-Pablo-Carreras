/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo Carreras
 * Created on: Nov 2024
 * This program ...
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let moveCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// When "A" is pressed
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    moveCounter = 0

    // Move the sprite around the screen
    while (loopCounter < 4) {
        moveCounter = 0
        while (moveCounter < 5) {
            moveCounter = moveCounter + 1
            pause(500)
            sprite.move(1)
           
        }

        // turn 90 degrees and add 1 to the loopCounter
        sprite.turn(Direction.Right, 90)
        loopCounter = loopCounter + 1
    }
})
