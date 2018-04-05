function Player(game) {
  this.img = new Image();
  this.img.src = "./img/rompe-ralph.png";
  this.img.frames = 4;
  this.img.frameIndex = 0;

  this.limitX=game.canvas.width
  this.limitY=game.canvas.height

  this.x = 5;
  this.y = 100;
  this.ctx = game.ctx
  this.vx = 0;
  this.vy = 0;
  this.userPullY=0
  this.gravitySpeed = 0.8;
  this.speed = 6;
  this.speedY = 1.4;

  this.isJumping = false;
}

Player.prototype.updatePlayer = function (currentmove) {
  this.draw();
  this.move();
  this.withKeyboard(currentmove)
}

Player.prototype.draw = function() {

  this.ctx.fillText("VX:" + this.vx +" VY:"+ this.vy, this.x, this.y)
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * (this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height / this.img.frames,
    this.x,
    this.y,
    40,70
  );
};


Player.prototype.move = function() {

  this.vy += (this.gravitySpeed - this.userPullY)
  this.x += this.vx
  this.y += this.vy

    //Limites de la Y
  if(this.y + this.vy > this.limitY-70){
    this.y = this.limitY -70
    this.vy = 0
  }
  
  if(this.x + this.vx < 0 ){
    this.vx = 0
    this.x =0
  }

  if(this.x +this.vx > this.limitX-40){
    this.vx = 0
    this.x =  this.limitX-40
  }

};

Player.prototype.collision = function(obstacle) {
  if (this.x < obstacle.x + obstacle.width && this.x + 40 > obstacle.x &&
      this.y < obstacle.y + obstacle.height && this.y + 70 > obstacle.y) {
        this.vx = 0;
        this.vy = 0;
  }
return false;
};

Player.prototype.doJump = function(){
  console.log("jump")
  this.isJumping = true;
  setTimeout(function(){
    this.isJumping = false;
    this.userPullY = 0
    console.log("endjump")
  }.bind(this),200)
}



Player.prototype.withKeyboard = function(currentmove){
  this.vx = 0

  if(currentmove.up && !this.isJumping){
    this.userPullY = this.speedY;
    this.doJump()
  }

  if(currentmove.left){
    this.vx = -this.speed;
  }
  if(currentmove.right){
    this.vx = this.speed;
  }
}

