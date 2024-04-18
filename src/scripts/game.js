import { MainScene } from "./scenes/mainScene.js"

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#153333',
    scene: [MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        }
    }
}

const game = new Phaser.Game(config)