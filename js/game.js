(Phaser => {

  const GAME_WIDTH = 500;
  const GAME_HEIGHT = 600;
  const GAME_CONTAINER_ID = 'game';
  const GFX = 'gfx';
  const GFF = 'gff';
  const GFZ = 'gfz';
  const INITIAL_MOVESPEED = 7;
  const SQRT_TWO = Math.sqrt(2);
  const ENEMY_SPAWN_FREQ = 100; //TEST
  const ENEMY_SPEED = 4.5; //TEST

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, { preload, create, update});

  let player;
  let player2;
  let x = 0;
  let testWall;
  let finishLine;
  let music;

  function preload() {
    game.load.spritesheet(GFF, '../assets/Overworld.png', 44, 100);
    game.load.spritesheet(GFX, '../assets/character.png', 16, 25);
    game.load.spritesheet(GFZ, '../assets/Inner.png', 32, 60);
    game.load.audio('music', ['../assets/epicmusic.mp3', '../assets/epicmusic1.ogg']);
    game.load.audio('sfx', ['../assets/Winner.mp3']);
  }

  function create() {
    finishLine = game.add.sprite(345, 10, GFZ, 10);
    testWall = game.add.sprite(5, 250, GFF, 8);
    testWall0 = game.add.sprite(50, 250, GFF, 8);
    testWall1 = game.add.sprite(90, 250, GFF, 8);
    testWall2 = game.add.sprite(130, 250, GFF, 8);
    testWall3 = game.add.sprite(170, 250, GFF, 8);
    testWall4 = game.add.sprite(210, 250, GFF, 8);
    testWall5 = game.add.sprite(250, 250, GFF, 8);
    testWall6 = game.add.sprite(290, 0, GFF, 8);
    testWall7 = game.add.sprite(290, 50, GFF, 8);
    testWall8 = game.add.sprite(290, 100, GFF, 8);
    testWall9 = game.add.sprite(290, 150, GFF, 8);
    testWall10 = game.add.sprite(290, 200, GFF, 8);
    testWall11 = game.add.sprite(290, 250, GFF, 8);
    testWall12 = game.add.sprite(5, 300, GFF, 8);
    testWall13 = game.add.sprite(5, 350, GFF, 8);
    testWall14 = game.add.sprite(5, 400, GFF, 8);
    testWall15 = game.add.sprite(5, 450, GFF, 8);
    testWall16 = game.add.sprite(5, 500, GFF, 8);
    testWall17 = game.add.sprite(110, 400, GFF, 8);
    testWall18 = game.add.sprite(150, 400, GFF, 8);
    testWall19 = game.add.sprite(190, 400, GFF, 8);
    testWall20 = game.add.sprite(230, 400, GFF, 8);
    testWall21 = game.add.sprite(270, 400, GFF, 8);
    testWall22 = game.add.sprite(310, 400, GFF, 8);
    testWall23 = game.add.sprite(350, 400, GFF, 8);
    testWall24 = game.add.sprite(390, 0, GFF, 8);
    testWall25 = game.add.sprite(390, 50, GFF, 8);
    testWall26 = game.add.sprite(390, 100, GFF, 8);
    testWall27 = game.add.sprite(390, 150, GFF, 8);
    testWall28 = game.add.sprite(390, 200, GFF, 8);
    testWall29 = game.add.sprite(390, 250, GFF, 8);
    testWall30 = game.add.sprite(390, 300, GFF, 8);
    testWall31 = game.add.sprite(390, 350, GFF, 8);
    testWall32 = game.add.sprite(390, 400, GFF, 8);
    testWall33 = game.add.sprite(110, 450, GFF, 8);
    testWall34 = game.add.sprite(110, 500, GFF, 8);

    music = game.add.audio('music');
    music.play();

    player = game.add.sprite(90, 550, GFX, 1);
    player2 = game.add.sprite(60, 550, GFX, 6);
    player.moveSpeed = INITIAL_MOVESPEED;
    player2.moveSpeed = INITIAL_MOVESPEED;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall0 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall1 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall2 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall3 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall4 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall5 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall6 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall7 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall8 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall9 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall10 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall11 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall12 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall13 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall14 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall15 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall16 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall17 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall18 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall19 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall20 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall21 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall22 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall23 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall24 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall25 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall26 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall27 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall28 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall29 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall30 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall31 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall32 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall33 ], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player, testWall34 ], Phaser.Physics.ARCADE);



    game.physics.arcade.enable([ player2, testWall], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall0], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall1], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall2], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall3], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall4], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall5], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall6], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall7], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall8], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall9], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall10], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall11], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall12], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall13], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall14], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall15], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall16], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall17], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall18], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall19], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall20], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall21], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall22], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall23], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall24], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall25], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall26], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall27], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall28], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall29], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall30], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall31], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall32], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall33], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, testWall34], Phaser.Physics.ARCADE);


    game.physics.arcade.enable([ player, finishLine], Phaser.Physics.ARCADE);
    game.physics.arcade.enable([ player2, finishLine], Phaser.Physics.ARCADE);


    
    cursors = game.input.keyboard.createCursorKeys();
    upButton = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downButton = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftButton = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightButton = game.input.keyboard.addKey(Phaser.KeyCode.D);

  }
  
  function update() {
    handlePlayerMovement(); 
    game.physics.arcade.overlap(player, testWall, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall0, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall1, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall2, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall3, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall4, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall5, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall6, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall7, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall8, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall9, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall10, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall11, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall12, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall13, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall14, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall15, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall16, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall17, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall18, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall19, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall20, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall21, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall22, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall23, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall24, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall25, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall26, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall27, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall28, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall29, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall30, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall31, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall32, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall33, overlapHandler, null, this);
    game.physics.arcade.overlap(player, testWall34, overlapHandler, null, this);

    game.physics.arcade.overlap(player2, testWall0, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall1, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall2, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall3, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall4, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall5, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall6, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall7, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall8, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall9, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall10, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall11, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall12, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall13, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall14, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall15, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall16, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall17, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall18, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall19, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall20, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall21, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall22, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall23, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall24, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall25, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall26, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall27, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall28, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall29, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall30, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall31, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall32, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall33, overlapHandler2, null, this);
    game.physics.arcade.overlap(player2, testWall34, overlapHandler2, null, this);


    game.physics.arcade.overlap(player, finishLine, overlapHandler3, null, this);
    game.physics.arcade.overlap(player2, finishLine, overlapHandler4, null, this);

  }

  function overlapHandler (obj1, obj2) {
    player.x = 90;
    player.y = 550;
  }

  function overlapHandler2 (obj1, obj2) {
    player2.x = 60;
    player2.y = 550;
  }

  function overlapHandler3 (obj1, obj2) {
    winner();
  }

  function overlapHandler4 (obj1, obj2) {
    winner2();
  }

  function handlePlayerMovement() {
    let movingH = SQRT_TWO;
    let movingV = SQRT_TWO;
    if (cursors.up.isDown || cursors.down.isDown){
      movingH = 1;
    }
    if (cursors.left.isDown || cursors.right.isDown){
      movingV = 1;
    }
    switch(true){
      case cursors.left.isDown:
      player.x -= player.moveSpeed * movingH;
      break;
      case cursors.right.isDown:
      player.x += player.moveSpeed * movingH;
      break;
      }
      switch(true){
        case cursors.down.isDown:
        player.y += player.moveSpeed * movingV;
        break;
        case cursors.up.isDown:
        player.y -= player.moveSpeed * movingV;
        break;
      }
    if (upButton.isDown || downButton.isDown){
      movingH = 1;
    }
    if (leftButton.isDown || rightButton.isDown){
      movingV = 1;
    }
    switch(true){
      case leftButton.isDown:
      player2.x -= player2.moveSpeed * movingH;
      break;
      case rightButton.isDown:
      player2.x += player2.moveSpeed * movingH;
      break;
    }
    switch(true){
      case downButton.isDown:
      player2.y += player2.moveSpeed * movingV;
      break;
      case upButton.isDown:
      player2.y -= player2.moveSpeed * movingV;
      break;
    }
  }

  function winner(){
    game.state.destroy();
    game.add.text(90, 200, 'Player 2 Wins!', {fill: '#FFFFFF'});
    let playAgain = game.add.text(90, 300, 'Play Again', { fill: '#FFFFFF' });
    playAgain.inputEnabled = true;
    playAgain.events.onInputUp.add(() => window.location.reload());
  }
  function winner2(){
    game.state.destroy();
    game.add.text(90, 200, 'Player 1 Wins!', {fill: '#FFFFFF'});
    let playAgain = game.add.text(90, 300, 'Play Again', { fill: '#FFFFFF' });
    playAgain.inputEnabled = true;
    playAgain.events.onInputUp.add(() => window.location.reload());
  }

})(window.Phaser);