function Obstacles (game, x, y, w, h) {
    this.game = game;
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
}


Obstacles.prototype.draw= function(x, y, width, height) {
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    
}


  