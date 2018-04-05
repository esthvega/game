

$(document).ready(function(){
  var game = new Game("canvas");
  game.start();

  $('.game-btn').click(function(){
    game.reset()
  }.bind(this));
  
})