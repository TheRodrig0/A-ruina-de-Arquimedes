export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });

        this.water
    }

    
    preload() { // Carregando os arquivos para o phaser
        this.load.image("groundImage", "assets/map/tiles/groundTileset.png")
        this.load.image("grassImage", "assets/map/tiles/grassTileset.png")
        this.load.image("waterImage", "assets/map/tiles/waterTileset.png")
        this.load.tilemapTiledJSON("map", "assets/map/map.json") 
    }

    create() {
        const map = this.make.tilemap({ key: "map" }) 

        const tilesetGround = map.addTilesetImage("ground", "groundImage")
        const tilesetGrass = map.addTilesetImage("grass", "grassImage")
        const tilesetWater = map.addTilesetImage("water", "waterImage")

        const grass = map.createLayer("grass", tilesetGrass, 0, 0) 
        this.water = map.createLayer("water", tilesetWater, 0, 0)

        this.water.setCollisionByProperty({ collider: true})
        

    }

}