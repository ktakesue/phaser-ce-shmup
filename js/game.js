(Phaser => {

  const GAME_WIDTH = 460;
  const GAME_HEIGHT = 600;
  const GAME_CONTAINER_ID = 'game';
  const GFX = 'gfx';
  const INITIAL_MOVESPEED = 4;
  const SQRT_TWO = Math.sqrt(2);
  const PLAYER_BULLET_SPEED = 6;

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, update});
  // {
  //   preload : preload,
  //   create : create,
  //   update : update,
  // }
  
  let player;
  let cursors;
  let playerBullets;

  // core game methods //  
  function preload() {
    // each cell is 28 px wide //
    game.load.spritesheet(GFX, '../assets/shmup-spritesheet-140x56-28x28-tile.png', 28, 28);
  
  }

  function create() {
    // creates a cursors object that has predefined values //
    cursors = game.input.keyboard.createCursorKeys();
    // binding fire to phaser spacebar //
    cursors.fire = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    // calls playerFire function // onUp = on release //
    cursors.fire.onUp.add(handlePlayerFire);



    // sets the (8th) spaceship at a specific point in display area // 
    player = game.add.sprite(100, 100, GFX, 8);
    // sets default player speed //
    player.moveSpeed = INITIAL_MOVESPEED;
    // gives player an array of bullets //
    playerBullets = game.add.group();
  }

  function update(){
    handlePlayerMovement();
    handleBulletAnimations();
  }

  // handler functions //
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
  }

  function handlePlayerFire(){
      playerBullets.add(game.add.sprite(player.x, player.y, GFX, 7));    
  }


  function handleBulletAnimations() {
     playerBullets.children.forEach( bullet => bullet.y -= PLAYER_BULLET_SPEED );
  }
  // console.log(Phaser);
})(window.Phaser);