function Obstacle(game, x, y, w, h) {
  this.game = game;
  this.width = w;
  this.height = h;
  this.x = x;
  this.y = y;
  this.img = new Image();
  this.img.src ="img/nube.png";
}
Obstacle.prototype.updateObstacle = function(game) {
  this.draw();
};
Obstacle.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

