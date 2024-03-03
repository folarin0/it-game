namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . . 1 1 f 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(hops_and_paw.x + 80, hops_and_paw.y - 80)
    bee.follow(hops_and_paw)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (hops_and_paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let bee: Sprite = null
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
info.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 4 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 4 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 4 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 4 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 4 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 4 5 f . 
        . . f 5 5 4 4 4 4 4 5 5 5 5 f . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(bee, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    bee = sprites.create(img`
        . 2 2 2 . . . 2 2 . . 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        `, SpriteKind.flower)
    tiles.placeOnTile(bee, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    hops_and_paw.setImage(img`
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
        `)
    if (hops_and_paw.vx < 0) {
        hops_and_paw.image.flipX()
    }
    if (hops_and_paw.vy < 0) {
        hops_and_paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 2 . . . . 
            . . . . . . . . . . . 2 2 5 . . 
            . . . . . . . . . . . . 2 2 . . 
            . . . . . . . . . . . 2 2 . . . 
            . . . . . . . . . . . 2 2 2 . . 
            . . 2 . . . . . . . 2 2 2 2 2 2 
            . . . 2 . . . . . 2 2 2 2 2 . . 
            . . . 2 2 . . . 2 2 2 2 2 2 2 . 
            . . . . 2 2 2 . 2 2 2 . . . . . 
            . . . . 2 2 2 2 2 . . . . . . . 
            . . . . . 2 . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (hops_and_paw.vy > 0) {
        hops_and_paw.setImage(img`
            . . . 2 2 . . . . . . . . . . . 
            . . . . 2 . . . . . . . . . . . 
            . . . . . 2 2 . . . . . . . . . 
            . . . . . 2 2 . . . . . . . . . 
            . . . . . 2 2 . . . . . . . . . 
            . . . . . 2 . 2 . . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . 2 2 2 2 . . . . . 
            . . . . . . . 2 2 2 2 2 . . . . 
            . . . . . . . 2 2 2 2 2 2 2 . . 
            . . . . . . . . 2 2 2 2 2 2 5 . 
            . . . . . . . . . 2 2 2 2 2 2 . 
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
    	
    }
})
