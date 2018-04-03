function Player(game) {
  this.width = 40;
  this.height = 70;
  this.img = new Image();
  this.img.src = "./img/rompe-ralph.png";
  this.x = 400;
  this.y = 200;
  this.game = game;
  this.img.frames = 4;
  this.img.frameIndex = 0;
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


Player.prototype.moveRight = function() {
  this.x += 10;
};

Player.prototype.moveLeft = function() {
  this.x -= 10;
};

Player.prototype.moveUp = function() {
  this.y -= 10;
};

Player.prototype.moveDown = function() {
  this.y += 10;
};

Player.prototype.move = function() {};
