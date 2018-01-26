(Phaser => {

  const GAME_WIDTH = 460;
  const GAME_HEIGHT = 600;
  const GAME_CONTAINER_ID = 'game';
  const GFX = 'gfx';
  const PLAYER_MOVESPEED = 4;
  const SQRT_TWO = Math.sqrt(2);
  const PLAYER_BULLET_SPEED = 6;
  const ENEMY_SPAWN_FREQ = 100; // higher is less frequent
  const ENEMY_SPEED = 4.5;

  // instance of a random generator //
  const randomGenerator = new Phaser.RandomDataGenerator();



  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, update});
  // {
  //   preload : preload,
  //   create : create,
  //   update : update,
  // }
  
  let player;
  let player2;
  let cursors;
  let playerBullets;
  let enemies;

  // CORE GAME METHODS //  
  function preload() {
    // each cell is 28 px wide //
    game.load.spritesheet(GFX, '../assets/shmup-spritesheet-140x56-28x28-tile.png', 28, 28);
  
  }

  function create() {
    // creates a cursors object that has predefined values //
    cursors = game.input.keyboard.createCursorKeys();
    // bound movement keys to WASD //
    upButton = game.input.keyboard.addKey(Phaser.KeyCode.W);
    downButton = game.input.keyboard.addKey(Phaser.KeyCode.S);
    leftButton = game.input.keyboard.addKey(Phaser.KeyCode.A);
    rightButton = game.input.keyboard.addKey(Phaser.KeyCode.D);

    // binding fire to phaser spacebar //
    cursors.fire = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    // calls playerFire function // onUp = on release //
    cursors.fire.onUp.add(handlePlayerFire);

    // sets the (8th) spaceship at a specific point in display area // 
    player = game.add.sprite(100, 100, GFX, 8);
    // add a second player //
    player2 = game.add.sprite(70, 70, GFX, 1);
    // sets default player speed //
    player.moveSpeed = PLAYER_MOVESPEED;
    player2.moveSpeed = PLAYER_MOVESPEED;
    // gives player an array of bullets //
    playerBullets = game.add.group();
    // creates a group of enemies //
    enemies = game.add.group();
  }

  // UPDATES ON EVERY FRAME //
  function update(){
    handlePlayerMovement();
    handleBulletAnimations();
    handleEnemyActions();
    handleCollisions();
    randomlySpawnEnemy();

    cleanup();
  }

  // HANDLER FUNCTIONS //
  function handlePlayerMovement() {
    let movingH = SQRT_TWO;
    let movingV = SQRT_TWO;

    if (cursors.up.isDown || cursors.down.isDown){
        movingH = 1; // slow down diagonal movement
    }
    if (cursors.left.isDown || cursors.right.isDown){
        movingV = 1; // slow down diagonal movement
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
    // set keys for second player //
    if (upButton.isDown || downButton.isDown){
        movingH = 1; // slow down diagonal movement
    }
    if (leftButton.isDown || rightButton.isDown){
        movingV = 1; // slow down diagonal movement
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

  // adds player bullets to display //
  function handlePlayerFire(){
      playerBullets.add(game.add.sprite(player.x, player.y, GFX, 7));    
  }

 // animates bullets to move across screen //
  function handleBulletAnimations() {
     playerBullets.children.forEach( bullet => bullet.y -= PLAYER_BULLET_SPEED);
  }

// determines the enemies actions //
  function handleEnemyActions() {
    // enemy speed on y axis //
    enemies.children.forEach(enemy => enemy.y += ENEMY_SPEED);
  }

  function handlePlayerHit(){
    gameOver();
  }

  function handleCollisions() {
    // check if any bullets touch any enemies
    let enemiesHit = enemies.children
      .filter(enemy => enemy.alive)
      .filter(enemy => 
        // .some if one thing meets its criteria, it returns true //
        playerBullets.children.some( 
          bullet => enemy.overlap(bullet) 
        ) 
      );

    if(enemiesHit.length){
      // clean up bullets that land
      playerBullets.children
        .filter(bullet => bullet.overlap(enemies))
        .forEach(removeBullet);

      enemiesHit.forEach(destroyEnemy);
    }
    // check if enemies hit the player
    enemiesHit = enemies.children
      .filter( enemy => enemy.overlap(player) );

    if(enemiesHit.length){
      handlePlayerHit();

      enemiesHit.forEach(destroyEnemy);
    }
  }

// randomly spawns an enemy //  
  function randomlySpawnEnemy() {
    if(randomGenerator.between(0, ENEMY_SPAWN_FREQ) === 0) {
      let randomX = randomGenerator.between(0, GAME_WIDTH);
      // randomly picks an x coordinate to spawn enemy //
      enemies.add(game.add.sprite(randomX, -24, GFX, 0));
    }
  }



// UTILITY FUNCTIONS //

// erases bullets off of display at a certain y axis //
  function cleanup() {
    playerBullets.children
      .filter(bullet => bullet.y < 24)
      .forEach(bullet => bullet.destroy());
  }

  function removeBullet(bullet) {
    bullet.destroy();
  }

  function destroyEnemy(enemy) {
    enemy.kill();
  }

  function gameOver() {
    game.state.destroy();
    game.add.text(90, 200, 'YOUR HEAD ASPLODE', { fill: '#FFFFFF' });
    let playAgain = game.add.text(120, 300, 'Play Again', { fill: '#FFFFFF' });
    playAgain.inputEnabled = true;
    // adds eventlistener to reload webpage // 
    playAgain.events.onInputUp.add(() => window.location.reload());
  }



  // console.log(Phaser);
})(window.Phaser);