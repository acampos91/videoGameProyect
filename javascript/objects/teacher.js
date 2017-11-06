function Teacher(ctx) {
  this.width = 60;
  this.height = 100;
  this.x = 385;
  this.y = 510;
  this.ctx = ctx;
  this.health = 3;
  this.img = new Image();
  this.img.src = "images/marcjuego.png";
}

Teacher.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  $('#teacher-health').html(newGame.player.health);
};

Teacher.prototype.moveLeft = function() {
  if (this.x > 200) {
    this.x -= 255;
  }
};
Teacher.prototype.moveRight = function() {
  if (this.x < 880) {
    this.x += 255;
  };
};

Teacher.prototype.shoot = function() {
  newGame.arrayIterations.push(new Iterations(30, 30, this.x, this.y, newGame.ctx));
  audio = new Audio("sounds/shoot.mp3");
  audio.play();
};
