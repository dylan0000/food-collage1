namespace SpriteKind {
    export const ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    game.over(false)
})
let ball: Sprite = null
scene.setBackgroundColor(6)
let cherrycake = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 3 3 f f f . . . . 
. . . f f f 3 3 3 3 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f 3 3 3 3 3 3 3 3 e f . . 
. . f e 3 f f f f f f 3 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 3 3 3 3 3 3 f 4 e . . 
. . 4 d f 3 3 3 3 3 3 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
cherrycake.setPosition(80, 80)
controller.moveSprite(cherrycake)
let messagedad = "ok"
cherrycake.say(messagedad)
scene.setBackgroundColor(6)
let noob1 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 3 3 f f f . . . . 
. . . f f f 3 3 3 3 f f f . . . 
. . f 3 3 3 e e e e e f f f . . 
. . 3 f 3 3 3 3 3 3 3 3 e f . . 
. . 3 e 3 f f f 3 3 3 3 e f . . 
. . 3 f f f e 3 3 e 3 3 f f . . 
. f 3 e f b 3 3 4 f 3 3 e f f . 
. f e 3 4 3 3 3 d f 3 3 e e f . 
. . f 3 3 3 3 3 d d 3 3 e f . . 
. . . 3 3 3 3 4 4 3 3 3 f . . . 
. . e 3 3 3 3 3 3 3 3 f 4 e . . 
. . 4 d f 3 3 3 3 3 3 f d 4 . . 
. . 4 4 f 4 3 3 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
noob1.setPosition(100, 80)
controller.moveSprite(noob1)
messagedad = "okk"
noob1.say(messagedad)
scene.setBackgroundColor(6)
let noob3 = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . 3 3 7 3 3 7 8 
. . . . . . 8 8 8 3 3 3 8 3 8 8 
. . e e e e c 6 3 3 3 3 8 3 8 . 
. e 2 5 4 2 e 3 3 3 3 3 3 7 8 . 
e 2 4 3 3 3 3 3 c 3 3 3 3 7 8 . 
e 2 3 2 2 3 2 3 3 3 3 . 3 6 8 . 
e 3 e e 2 2 3 2 3 3 e 3 c 6 8 . 
c 3 3 3 2 2 3 3 3 2 3 3 2 c 8 . 
. c 2 e 3 3 3 3 3 3 2 2 3 3 c . 
. . c 2 2 2 e e 2 3 2 2 2 2 3 3 
. . . e c c e c 2 2 2 2 2 2 2 e 
. . . . . . . c 2 e e 2 2 e 2 c 
. . . . . . . c e e e e e e 2 c 
. . . . . . . . c e 2 2 2 2 c . 
. . . . . . . . . c c c c c . . 
`, SpriteKind.Player)
noob3.setPosition(120, 80)
controller.moveSprite(noob3)
messagedad = "okkk"
noob3.say(messagedad)
scene.setBackgroundColor(6)
let noob2 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 3 3 f f f . . . . 
. . . f f f 3 3 3 3 f f f . . . 
. . f 3 3 3 e f f f e f f f . . 
. . 3 f 3 3 f f 3 f 3 3 e f . . 
. . 3 e 3 f f f f f 3 3 e f . . 
. . 3 f f f f 3 3 f 3 3 f f . . 
. f 3 f f b f f f f f 3 e f f . 
. f e f 4 3 f 3 f f 3 3 e e f . 
. . f f f 3 f 3 d f f 3 e f . . 
. . . 3 3 f 3 4 4 3 3 f f . . . 
. . e 3 3 f f f 3 3 3 f f e . . 
. . 4 d f f f 3 3 3 3 f f 4 . . 
. . 4 4 f 4 3 3 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
noob2.setPosition(140, 80)
controller.moveSprite(noob2)
messagedad = "okkkkk"
noob2.say(messagedad)
game.onUpdate(function () {
    ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 8 8 8 8 8 8 5 5 5 5 
. . 5 5 5 8 8 2 2 2 2 2 8 5 5 5 
. . 5 5 5 8 2 2 4 4 4 2 2 8 5 5 
. 5 5 5 5 8 2 4 c c 4 2 2 8 5 5 
. 5 5 5 5 8 2 4 c c 4 2 2 8 5 5 
. 5 5 5 5 8 2 4 c c 4 2 8 5 5 5 
. . 5 5 5 5 8 4 c c 4 8 5 5 5 5 
. . . 5 5 5 8 4 4 4 2 8 5 5 5 . 
. . . . 5 5 8 8 2 2 8 5 5 5 . . 
. . . . . 5 5 5 8 8 8 5 5 5 . . 
. . . . . . 5 5 5 5 5 5 5 . . . 
`, SpriteKind.ball)
    ball.y += controller.dx()
    ball.x += controller.dy()
})
