function Student(x, ctx, health, speed, images) {
    var randomStudentsPositionX = [130, 385, 640, 895];
    this.width = 60;
    this.height = 100;
    this.x =  randomStudentsPositionX[Math.floor(Math.random() * ((randomStudentsPositionX.length - 0) + 0))];
    this.y = 0;
    this.ctx = ctx;
    this.health = health;
    this.speed = speed;
    this.img = new Image();
    this.img.src = images;
   }

Student.prototype.draw = function(){
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Student.prototype.move = function (){
  this.y += this.speed;
};

Student.prototype.left = function(){ return this.x; };

Student.prototype.right = function(){  return this.x + this.width ; };

Student.prototype.top = function(){  return this.y; };

Student.prototype.bottom = function(){ return this.y + this.height; };
