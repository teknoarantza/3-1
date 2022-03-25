input.onButtonPressed(Button.A, function () {
    Bonba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    let sprite: game.LedSprite = null
    for (let index = 0; index < 4; index++) {
        Bonba.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.SmallDiamond)
        sprite.set(LedSpriteProperty.X, 2)
        sprite.set(LedSpriteProperty.Y, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    Bonba.move(1)
})
let Bonba: game.LedSprite = null
Bonba = game.createSprite(2, 0)
