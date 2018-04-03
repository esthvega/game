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
  this.playerCanMove = [false, false, false, false];
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
  if (this.x + this.width >= this.game.canvas.width) return;
  if (this.playerCanMove[0])
  this.x += 10;
};

Player.prototype.moveLeft = function() {
  if (this.x <= 0) return;
  if(this.playerCanMove[1])
    this.x -= 10;
};

Player.prototype.moveUp = function() {
  if (this.y <= 0) return;
  if (this.playerCanMove[2])
  this.y -= 10;
};

Player.prototype.moveDown = function() {
  if (this.y + this.height >= this.game.canvas.height) return;
  if (this.playerCanMove[3])
  this.y += 10;
};

Player.prototype.move = function() {};
Player.prototype.trueLeft = function() {
  this.playerCanMove[1] = true;
}
Player.prototype.trueRight = function() {
  this.playerCanMove[0] = true;
}

Player.prototype.trueUp = function() {
  this.playerCanMove[2] = true;
}

Player.prototype.trueDown = function() {
  this.playerCanMove[3] = true;
}
Player.prototype.falseLeft = function() {
  this.playerCanMove[1] = false;
}
Player.prototype.falseRight = function() {
  this.playerCanMove[0] = false;
}

Player.prototype.falseUp = function() {
  this.playerCanMove[2] = false;
}

Player.prototype.falseDown = function() {
  this.playerCanMove[3] = false;
}
