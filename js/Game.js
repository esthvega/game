function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.player = new Player(this);
  this.obstacles = new Obstacles(this);
  this.playerCanMove = [true, true, true, true];
}

Game.prototype.draw = function() {
  this.player.draw();
  this.obstacles.draw();
};

Game.prototype.start = function() {
 
  this.setListeners();
  this.interval = setInterval(
    function() {
      console.log(this.player.x, this.player.y)
      this.clear();
      this.isCollisionR(this.obstacles);
      this.isCollisionL(this.obstacles);
      this.isCollisionD(this.obstacles);
      this.isCollisionU(this.obstacles);
      this.draw();
    }.bind(this),
    3
  );
};
Game.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 39:
        if (this.playerCanMove[1]) this.player.moveRight();
        break;
      case 37:
        if (this.playerCanMove[3]) this.player.moveLeft();
        break;
      case 38:
        if (this.playerCanMove[0]) this.player.moveUp();
        break;
      case 40:
        if (this.playerCanMove[2]) this.player.moveDown();
        break;
    }
  }.bind(this);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

// Game.prototype.isCollision = function(obstacles) {
//   if (
//     this.player.x + this.player.width > obstacles.x &&
//     obstacles.x + obstacles.width > this.player.x &&
//     this.player.y + this.player.height > obstacles.y &&
//     obstacles.y + obstacles.height > this.player.y
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

Game.prototype.isCollisionR = function(obstacles) {
  if (
    this.player.x +10 + this.player.width > obstacles.x &&
    obstacles.x + obstacles.width > this.player.x + 10 &&
    this.player.y + this.player.height > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y
  ) {  
    this.playerCanMove[1] = false;}
  else this.playerCanMove[1] = true;
};
Game.prototype.isCollisionL = function(obstacles) {
  if (
    this.player.x - 10 + this.player.width > obstacles.x &&
    this.player.x - 10 < obstacles.x + obstacles.width &&
    this.player.y + this.player.height > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y
  ){
    this.playerCanMove[3] = false;}
  else this.playerCanMove[3] = true;
};

Game.prototype.isCollisionD = function(obstacles) {
  if (this.player.x - 10 + this.player.width > obstacles.x &&
    this.player.x < obstacles.x + obstacles.width &&
    this.player.y + 10 + this.player.height > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y)
{  
    console.log(this.player.x)
    
  this.playerCanMove[2] = false;}
  else this.playerCanMove[2] = true;
};

Game.prototype.isCollisionU = function(obstacles) {
   if(this.player.x + this.player.width > obstacles.x &&
    this.player.x < obstacles.x + obstacles.width &&
    this.player.y - 10 + this.player.height > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y - 10)
  
  {
this.playerCanMove [0] = false;
  } else this.playerCanMove[0] = true;

};