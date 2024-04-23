import { createPlayer, loadPlayerSprites } from "../player.js"
import { createControls, configControls } from "../controls.js"

export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });

        this.player
        this.controls

        this.ground
        this.grass
        this.water

    }


    preload() { // Carregando os arquivos para o phaser
        this.load.image("groundImage", "assets/map/tiles/groundTileset.png")
        this.load.image("grassImage", "assets/map/tiles/grassTileset.png")
        this.load.image("waterImage", "assets/map/tiles/waterTileset.png")
        this.load.tilemapTiledJSON("map", "assets/map/map.json")

        loadPlayerSprites(this)

    }

    create() {
        const map = this.make.tilemap({ key: "map" })

        const tilesetGround = map.addTilesetImage("ground", "groundImage")
        const tilesetGrass = map.addTilesetImage("grass", "grassImage")
        const tilesetWater = map.addTilesetImage("water", "waterImage")

        this.ground = map.createLayer("ground", tilesetGround, 0, 0)
        this.grass = map.createLayer("grass", tilesetGrass, 0, 0)
        this.water = map.createLayer("water", tilesetWater, 0, 0)

        this.player = createPlayer(this, 2200, 2200)

        this.water.setCollisionByProperty({ collider: true })
        this.physics.add.collider(this.player, this.water)

        this.cameras.main.startFollow(this.player)
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

        this.controls = createControls(this)
        
    }

    update(){
        configControls(this.player, this.controls)
    }

}