(Phaser => {
  const GAME_WIDTH = 460;
  const GAME_HEIGHT = 600;
  const GAME_CONTAINER_ID = 'game';
  const GFX = 'gfx';

  const game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, GAME_CONTAINER_ID, {preload, create, update});
  // {
  //   preload : preload,
  //   create : create,
  //   update : update,
  // }
  let player;
  // core game methods //  
  function preload() {
    // each cell is 28 px wide //
    game.load.spritesheet(GFX, '../assets/shmup-spritesheet-140x56-28x28-tile.png', 28, 28);

  }

  function create() {
    // sets the (8th) spaceship at a specific point in display area // 
    player = game.add.sprite(100, 100, GFX, 8);
  }

  function update(){

  }


  // console.log(Phaser);
})(window.Phaser);