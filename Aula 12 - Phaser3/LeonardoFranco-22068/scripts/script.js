var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
        gravity: { y: 300 },
        debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

//variable declaration
var platforms;
var stars;
var bombs;
var player;
var score = 0;
var scoreText;

function preload (){

    //load images and sprites
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png',{ frameWidth: 32, frameHeight: 48 });
}

function create (){

    //add sky
    this.add.image(400, 300, 'sky');

    //create groups of objects that have physics
    platforms = this.physics.add.staticGroup();
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    bombs = this.physics.add.group();

    //add objects to the group and create them
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    //set stars properties
    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    //add player
    player = this.physics.add.sprite(100, 450, 'dude');

    //set player properties
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //add player animations
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //add a collider between player and platforms
    this.physics.add.collider(player, platforms);

    //add a collider between stars and platforms
    this.physics.add.collider(stars, platforms);

    //add a collider between stars and players calling collectStar on collide
    this.physics.add.overlap(player, stars, collectStar, null, this);

    //add a collider between bombs and platforms
    this.physics.add.collider(bombs, platforms);

    //add a collider between player and bombs
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    //add keyboard input
    cursors = this.input.keyboard.createCursorKeys();

    //add score text
    scoreText = this.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000' });
}

function update (){

    //add controls to player
    if (cursors.left.isDown){
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown){
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else{
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-330);
    }
}

//on touch star
function collectStar (player, star){

    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0){

        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');

        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
}

//on touch bomb
function hitBomb (player, bomb){

    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
}

