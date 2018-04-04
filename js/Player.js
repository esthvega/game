function Player(game) {
  this.width = 40;
  this.height = 70;
  this.img = new Image();
  this.img.src = "./img/rompe-ralph.png";
  this.x = 500;
  this.y = 100;
  this.lastPosition
  this.game = game;
  this.img.frames = 4;
  this.img.frameIndex = 0;
  this.vx = 6;
  this.vy = 6;
  this.gravitySpeed = 6;
  this.playerMovement = [false, false, false, false];
}
Player.prototype.updatePlayer = function (game) {
  this.draw();
  this.move();
  this.lastPosition = Object.assign({},{x:this.x}, {y:this.y})
}
Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * (this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height / this.img.frames,
    this.x,
    this.y,
    this.width,
    this.height
  );
};
Player.prototype.move = function() {
  if(this.playerMovement[0]) this.moveUp();
  if(this.playerMovement[1]) this.moveRight();
  if(this.playerMovement[3]) this.moveLeft();
};

Player.prototype.gravity = function() {
  if(this.canMoveDown()) this.y += this.gravitySpeed;
}
Player.prototype.moveRight = function() {
  if(this.canMoveRight())this.x += this.vx;
};

Player.prototype.moveLeft = function() {
  if(this.canMoveLeft())this.x -= this.vx;
};

Player.prototype.moveUp = function() {
  if(this.canMoveUp())this.y -= this.vy;
};
Player.prototype.moveDown = function() {
  if(this.canMoveDown())this.y += this.vy;
};

Player.prototype.canMoveRight = function() {
  if(this.x >= this.game.canvas.width-this.width) return false;
  else return true;
};

Player.prototype.canMoveLeft = function() {
  if(this.x <= 0) return false;
  else return true;
};

Player.prototype.canMoveUp = function() {
  if(this.y <= 0) return false;
  else return true;
};
Player.prototype.canMoveDown = function() {
  if(this.y >= this.game.canvas.height-this.height) return false;
  else return true;
};