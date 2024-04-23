export const createControls = (scene) => {
    return scene.input.keyboard.createCursorKeys()
}

const defaultVelocity = 200

export const configControls = (player, controls) => {

    player.setVelocity(0)

    if (player.isAttacking) return

    for (const control in controls) {
        if (controls[control].isDown) {
            movePlayer(player, control, defaultVelocity)
        }

    }

    if (!controls.left.isDown && !controls.right.isDown &&
        !controls.up.isDown && !controls.down.isDown) {
        player.anims.play('player_idle', true)
    }
}


const movePlayer = (player, direction, velocity) => {
    player.anims.play('player_run', true)

    if (direction === "right") {
        player.setFlipX(false)
        player.setVelocityX(velocity)

    } if (direction === "left") {
        player.setFlipX(true)
        player.setVelocityX(-velocity)

    } if (direction === "up") {
        player.setVelocityY(-velocity)

    } if (direction === "down") {
        player.setVelocityY(velocity)

    }

}

const attack = (player, direction) => {

}
