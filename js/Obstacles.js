function Obstacle(game, x, y, w, h) {
  this.game = game;
  this.width = w;
  this.height = h;
  this.x = x;
  this.y = y;
}
Obstacle.prototype.updateObstacle = function(game) {
  this.draw();
};
Obstacle.prototype.draw = function(x, y, width, height) {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};

