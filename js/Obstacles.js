function Obstacles (game) {
    this.game = game;
    this.width = 60;
    this.height = 110;
    this.x = 400;
    this.y = 300;
}


Obstacles.prototype.draw= function(x, y, width, height) {
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    
}


/*     this.x = this.game.canvas.width;
    this.y = this.game.canvas.height; */
  