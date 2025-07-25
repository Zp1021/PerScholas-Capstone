// Import player functionality
import Player from "./Player";

// Allows the start of the game to inherit all things related to the scene
export default class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    // Loads respective assets
    preload() {
        
        this.load.setPath('/src/assets');
        this.load.image('sky', 'sky.png');
        this.load.image('ground', 'platform.png');
        this.load.image('star', 'star.png');
        this.load.image('bomb', 'bomb.png');
        

        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    // Allocates assets to locations on the screen
    create() {

        this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        this.player = new Player(this, 100, 450);

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.stars.children.iterate(child => {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        // Allows stars to interact with player and platforms
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        this.gameOverText = this.add.text(400, 300, 'GAME OVER', { fontSize: '64px', fill: '#000' });
        this.gameOverText.setOrigin(0.5)
        this.gameOverText.visible = false

        this.bombs = this.physics.add.group();
        
        // Allows hazards to interact with players and platforms
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
    }

    // Allows players to persistently control the sprite
    update() {
   
        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        }
        else if (this.cursors.right.isDown) {
            this.player.moveRight()
        }
        else {
            this.player.idle();
        }
        if (this.cursors.up.isDown) {
            this.player.jump();
        }

    }

    // Allows players to collect stars and earn score
    // Releasing stage hazarads as the player collects more stars
    collectStar(player, star) {
        star.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`)

        if(this.stars.countActive(true) === 0) {
            this.stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });

            this.releaseBomb();
        }
    }

    // Allows players to interact with hazards
    // when a hazard is hit triggers game over
    hitBomb (player, bomb) {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        this.time.delayedCall(2000, () =>{
            // this.scene.start('GameOver');
            this.gameOverText.visible = true
            
        })
    }

    // Method to release hazards at a random velocity in a specific area
    releaseBomb(){
        var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}
