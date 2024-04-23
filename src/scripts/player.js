class Player extends Phaser.Physics.Arcade.Sprite {
    constructor() {
        super()
        isAttacking = false
    }

}

export const createPlayer = (scene, x, y) => {
    const player = scene.physics.add.sprite(x, y, 'player_idle')
    createAnimations(scene, player)

    return player
}


export const loadPlayerSprites = (scene) => {

    scene.load.spritesheet('player_idle', './assets/player/player_idle.png', {
        frameWidth: 48,
        frameHeight: 48,
        spacing: 48,
    })

    scene.load.spritesheet('player_run', './assets/player/player_run.png', {
        frameWidth: 48,
        frameHeight: 48,
        spacing: 48,

    })

    // temporary
    scene.load.spritesheet('player_attack', './assets/player/player_idle.png', {
        frameWidth: 48,
        frameHeight: 48,
        spacing: 48,

    })
}

const createAnimations = (scene, player) => {
    scene.anims.create({
        key: 'player_idle',
        frames: scene.anims.generateFrameNames('player_idle', {
            start: 0,
            end: 9
        }),
        frameRate: 8,
        repeat: -1,
        yoyo: true
    })

    scene.anims.create({
        key: 'player_run',
        frames: scene.anims.generateFrameNames('player_run', {
            start: 0,
            end: 7
        }),
        frameRate: 8,
    })

    scene.anims.create({
        key: 'player_attack',
        frames: scene.anims.generateFrameNames('player_attack', {
            start: 0,
            end: 9
        }),
        frameRate: 8,
        repeat: 0
    })

    player.on('animationcomplete', (animation) => {
        if(animation.key !== 'player_attack') return
            player.isAttacking = false
        
    }, scene)


}