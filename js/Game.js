function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth - 25;
  this.canvas.height = window.innerHeight - 25;
  this.player = new Player(this);
  this.obstacles = [
    new Obstacle(
      this,
      0,
      this.canvas.height * 0.9,
      this.canvas.width * 0.4,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      this.canvas.width * 0.65,
      this.canvas.height * 0.9,
      this.canvas.width * 0.4,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      0,
      this.canvas.height * 0.4,
      this.canvas.width * 0.2,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      700,
      this.canvas.height * 0.4,
      this.canvas.width * 0.2,
      this.canvas.height * 0.1
    )
  ];
}
Game.prototype.updateGame = function() {
  this.clear();
  this.player.updatePlayer(this);
  this.obstacles.forEach(function(obstacle) {
    obstacle.updateObstacle();
  });
  this.checkCollisions();
  this.player.gravity();
};

Game.prototype.checkCollisions = function() {
  var collision = [false, false, false, false];
  this.obstacles.forEach(
    function(obstacle) {
      if (obstacle.isCollision(this.player) != undefined) {
        if (this.player.playerMovement[1]) {
          collision[1] = obstacle.isCollision(this.player);
          this.player.x = this.player.lastPosition.x - 10;
          this.player.y = this.player.lastPosition.y;
        }
        if (this.player.playerMovement[3]) {
          collision[3] = obstacle.isCollision(this.player);
          this.player.x = this.player.lastPosition.x + 7;
          this.player.y = this.player.lastPosition.y;
        }
        if (this.player.playerMovement[0]) {
          collision[0] = obstacle.isCollision(this.player);
          this.player.x = this.player.lastPosition.x;
          this.player.y = this.player.lastPosition.y + 7;
        }
        if(!this.player.playerMovement[1]&&!this.player.playerMovement[3]) {
          this.player.gravitySpeed = 0;
          this.player.y = this.player.lastPosition.y - 7;
        }else{
          this.player.gravitySpeed = 6;
        }
      }
    }.bind(this)
  );
  return collision;
};

Game.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 39:
        if (!this.checkCollisions()[1]) this.player.playerMovement[1] = true;
        break;
      case 37:
        if (!this.checkCollisions()[3]) this.player.playerMovement[3] = true;
        break;
      // case 38:
      // if(!this.checkCollisions()[0])this.player.playerMovement[0] = true;
      // console.log("salto")
      //   break;
    }
  }.bind(this);
  document.onkeyup = function(event) {
    switch (event.keyCode) {
      case 39:
        this.player.playerMovement[1] = false;
        break;
      case 37:
        this.player.playerMovement[3] = false;
        break;
      // case 38:
      //   this.player.playerMovement[0] = false;
    }
  }.bind(this);
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
Game.prototype.start = function() {
  this.setListeners();
  setInterval(
    function() {
      this.updateGame();
    }.bind(this),
    1000 / 60
  );
};
