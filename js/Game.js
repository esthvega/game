function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth - 25;
  this.canvas.height = window.innerHeight - 25;
  this.player = new Player(this);
  this.obstacles = [
    new Obstacles(this, 0, this.canvas.height * 0.8, this.canvas.width * 0.6, this.canvas.height * 0.1),
    new Obstacles(this, 1, this.canvas.height * 0.5, this.canvas.width * 0.1, this.canvas.height * 0.1),
  ];
}

Game.prototype.draw = function() {
  this.player.draw();
  this.obstacles.forEach(function(e) {
    e.draw();
  });
};

Game.prototype.start = function() {
  this.setListeners();
  this.interval = setInterval(
    function() {
      console.log(this.player.x, this.player.y);
      this.clear();
      this.obstacles.forEach(function(e) {
        this.isCollisionR(e);
        this.isCollisionL(e);
        
        this.isCollisionD(e);
        this.isCollisionU(e);
      }.bind(this))
      
      this.player.moveRight();
      this.player.moveLeft();
      this.player.moveUp();
      this.player.moveDown();
      this.draw();
    }.bind(this),
    60
  );
};
Game.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 39:
        this.player.trueRight();
        break;
      case 37:
        this.player.trueLeft();
        break;
      case 38:
        this.player.trueUp();
        break;
      case 40:
        this.player.trueDown();
        break;
    }
  }.bind(this);
  document.onkeyup = function(event) {
    switch (event.keyCode) {
      case 39:
        this.player.falseRight();
        break;
      case 37:
        this.player.falseLeft();
        break;
      case 38:
        this.player.falseUp();
        break;
      case 40:
        this.player.falseDown();
        break;
    }
  }.bind(this);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};



Game.prototype.isCollisionR = function(obstacles) {
  
  if (
this.player.x + 10 < obstacles.x + obstacles.width &&
this.player.x + 10 + this.player.width > obstacles.x &&
this.player.y < obstacles.y + obstacles.height &&
this.player.y + this.player.height > obstacles.y 

  
  ) {
    this.player.falseRight();
  }
};
Game.prototype.isCollisionL = function(obstacles) {
  if (
    this.player.x - 10 + this.player.width > obstacles.x &&
    this.player.x - 10 < obstacles.x + obstacles.width &&
    this.player.y + this.player.height > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y
  ) {
    this.player.falseLeft();
  } 
};

Game.prototype.isCollisionD = function(obstacles) {
  if (
    this.player.x + this.player.width > obstacles.x &&
    this.player.x < obstacles.x + obstacles.width &&
    this.player.y +10 
    + this.player.height > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y
  ) {
  
    this.player.falseDown();
    }
};

Game.prototype.isCollisionU = function(obstacles) {
  if (
    this.player.x + this.player.width > obstacles.x  &&
    this.player.x < obstacles.x + obstacles.width   &&
    this.player.y + 10 > obstacles.y &&
    obstacles.y + obstacles.height > this.player.y - 10
  ) 
    
    this.player.falseUp();
  
}