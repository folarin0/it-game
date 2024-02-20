scene.setBackgroundColor(9)
let hops_and_paw = sprites.create(img`
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
controller.moveSprite(hops_and_paw)
tiles.setCurrentTilemap(tilemap`level1`)
