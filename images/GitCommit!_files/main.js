var newGame ;
var ctx;
$(document).ready(function() {
  ctx = document.getElementById('board').getContext('2d');
  newGame = new Game(ctx);

  setInterval(function() {
    newGame.update();
    level1();
  if(newGame.randomStudents.length == 0){
    level2();
  }
}, 70);

  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
        newGame.player.moveLeft();
        break;
      case 39:
        newGame.player.moveRight();
        break;
      case 32:
        newGame.player.shoot();
        break;
    }
  });
});
function level1 (){
  var images = ["images/fresijuego.png","images/Asierjuego.png"];
  var random = Math.floor(Math.random() * images.length);
  newGame.frames += 1;
  if (newGame.frames % 17 === 0) {
    if (newGame.counter < 14) {
      newGame.randomStudents.push(new Student(this.x, newGame.ctx, 1, 7, images[random]));
      newGame.counter += 1;
    }
}
}

function level2 (){
  var images = ["images/fresijuego.png","images/Asierjuego.png"];
  var random = Math.floor(Math.random() * images.length);
  newGame.frames += 1;
  if (newGame.frames % 17 === 0) {
    if (newGame.counter < 14) {
      newGame.randomStudents.push(new Student(this.x, newGame.ctx, 3, 8, images[random]));
      newGame.counter += 1;
    }
  }
}
