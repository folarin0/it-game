controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops_and_paw.vy == 0) {
        hops_and_paw.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
let hops_and_paw: Sprite = null
scene.setBackgroundColor(9)
hops_and_paw = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 2 2 . 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 3 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 . 2 . . . . 2 . 2 . . 
    . . . . 2 . 2 . . . . 2 . 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hops_and_paw, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hops_and_paw.ay = 350
scene.cameraFollowSprite(hops_and_paw)
