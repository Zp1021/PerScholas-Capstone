import Phaser from "phaser";

// Allows the player class to inherit necessary physics features for the game to feel responsive
export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'dude');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setBounce(0.2);
        this.setCollideWorldBounds(true);
        this.initAnimations();
    }

    // Allows for sprite to be animated when moving left, right, or when idling
    initAnimations() {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

    }

    // Allows player to move left
    moveLeft() {
        this.setVelocityX(-200);

        this.anims.play('left', true);
    }

    // Allows player to move right    
    moveRight() {
        this.setVelocityX(200);

        this.anims.play('right', true);
    }

    // when players are not moving plays the idle animation
    idle() {
        this.setVelocityX(0);

        this.anims.play('turn');
    }

    // Players to jump
    jump() {
        if (this.body.blocked.down) {
            this.setVelocityY(-425);
        }
    }
}