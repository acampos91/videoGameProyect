function Game (ctx){
  this.ctx = ctx;
  this.img = new Image();
  this.img.src = "images/clase.png";
  this.img.addEventListener('load', this.update.bind(this));
  this.counter =  0 ;
  this.player= new Teacher (ctx);
  this.arrayIterations = [];
  this.randomStudents = [];
  this.frames= 0;

}

Game.prototype.update = function (){
        this.ctx.drawImage(this.img, 0, 0, 1080, 720);
        this.player.draw();
        this.studentsDraw();
        this.iterationsDraw();
        this.crash();
        this.endGame();


};


Game.prototype.endGame = function (){
  if (this.player.health == 0){
    $( "#endGame" ).addClass( "active" );
  }
};

Game.prototype.crash = function (){
  for (j = 0; j < this.randomStudents.length; j++) {
    for (i = 0; i < this.arrayIterations.length; i++) {
      if (this.crashWith(this.randomStudents[j], this.arrayIterations[i])) {
        this.arrayIterations.splice(i, 1);
        this.randomStudents[j].health -= 1;
        if (this.randomStudents[j].health === 0){
          this.randomStudents.splice(j, 1);
          return;
        }
      }
    }
  }
};


Game.prototype.crashWith = function (student, iterations){
    return !((student.bottom() < iterations.top()) ||
      (student.top() > iterations.bottom()) ||
      (student.right() < iterations.left()) ||
      (student.left() > iterations.right()));


};


Game.prototype.studentsDraw = function (){
  for (i = 0; i < this.randomStudents.length; i++) {
    this.randomStudents[i].move();
    if (this.randomStudents[i].y === 399 && this.player.health > 0) {
      audio = new Audio("Sounds/ending.mp3");
      audio.play();
      this.randomStudents.splice(i,1);
      return this.player.health -=1;

    }
    this.randomStudents[i].draw();
  }
};
Game.prototype.iterationsDraw = function (){
  for (i = 0; i < this.arrayIterations.length; i++) {
    this.arrayIterations[i].move();
    this.arrayIterations[i].draw();
  }
};
