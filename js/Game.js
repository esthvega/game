function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
this.img = new Image ();
this.img.src="./img/Dios.png";
  this.background = new Background(this);
  this.player = new Player(this);
  this.keys = { up: false, down: false, left: false, right: false };
  this.obstacles = [
    new Obstacle(
      this,
      100,
      this.canvas.height * 0.8,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      270,
      this.canvas.height * 0.3,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      540,
      this.canvas.height * 0.4,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      400,
      this.canvas.height * 0.7,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      780,
      this.canvas.height * 0.87,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      1500,
      this.canvas.height * 0.7,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      900,
      this.canvas.height * 0.3,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      1300,
      this.canvas.height * 0.2,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      1500,
      this.canvas.height * 0.4,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      1000,
      this.canvas.height * 0.3,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      1100,
      this.canvas.height * 0.6,
      this.canvas.width * 0.1,
      this.canvas.height * 0.1
    )
  ];
}
Game.prototype.updateGame = function() {
  this.clear();
  this.background.draw();
  this.ctx.drawImage(this.img, 980, 45, 100, 100);
  this.player.updatePlayer(this.keys);
  var that = this;
  this.obstacles.forEach(function(obstacle) {
    obstacle.updateObstacle();
    that.player.collision(obstacle);
  });
};

Game.prototype.setListeners = function() {
  var keyRecord = function(event, enable) {
    switch (event.keyCode) {
      case 39:
        this.keys.right = enable;
        break;
      case 37:
        this.keys.left = enable;
        break;
      case 38:
        this.keys.up = enable;
        break;
    }
  }.bind(this);

  document.onkeydown = function(event) {
    keyRecord(event, true);
  };
  document.onkeyup = function(event) {
    keyRecord(event, false);
  };
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.start = function() {
  $('#game-over').fadeOut();
  this.setListeners();
  this.interval = setInterval(
    function() {
      this.won();
      this.updateGame();
      if (this.limits()) {
        this.gameOver();
      }
    }.bind(this),
    1000 / 60
  );
};
Game.prototype.stop = function() {

  clearInterval(this.interval);

};

Game.prototype.limits = function() {
  if (this.player.y <= 0 || this.player.y + 70 > this.player.limitY) {
    return true;
  }
};

Game.prototype.gameOver = function() {
  this.player.y = 200
  this.stop();
  $('#game-over').fadeIn();
};

Game.prototype.reset = function () {
  console.log(this.player.userPullY)
  this.start()
} 

Game.prototype.won = function() {
  if (this.player.x >= 980 &&
  this.player.y <= 45) {
    $ ("#game-won").show();
  }
}
