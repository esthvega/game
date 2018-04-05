function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = window.innerWidth - 25;
  this.canvas.height = window.innerHeight - 25;
  this.player = new Player(this);
  this.keys = {up:false,down:false,left:false,right:false};

  this.obstacles = [
    new Obstacle(
      this,
      200,
      this.canvas.height * 0.8,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      550,
      this.canvas.height * 0.3,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      350,
      this.canvas.height * 0.4,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    ),
    new Obstacle(
      this,
      450,
      this.canvas.height * 0.7,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    ) ,
    new Obstacle(
      this,
      680,
      this.canvas.height * 0.9,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    ) ,
    new Obstacle(
      this,
      850,
      this.canvas.height * 0.7,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    ) ,
    new Obstacle(
      this,
      1000,
      this.canvas.height * 0.3,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    )
    ,
    new Obstacle(
      this,
      1100,
      this.canvas.height * 0.8,
      this.canvas.width * 0.04,
      this.canvas.height * 0.1
    )
  ];
}
Game.prototype.updateGame = function() {
  this.clear();
  this.player.updatePlayer(this.keys);
  var that = this
  this.obstacles.forEach(function(obstacle) {
    obstacle.updateObstacle();
    that.player.collision(obstacle);
  });
};


Game.prototype.setListeners = function() {

  var keyRecord = function(event, enable) {
    switch (event.keyCode) {
      case 39: this.keys.right = enable
        break;
      case 37: this.keys.left = enable
        break;
      case 38: this.keys.up = enable
        break;
    }
  }.bind(this)

  document.onkeydown = function(event) {
    keyRecord(event, true)
  };
  document.onkeyup = function(event) {
    keyRecord(event, false)
  };;
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
