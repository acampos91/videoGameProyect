  function Iterations(width, height, x, y, ctx, color) {
    this.width = width;
    this.height = height;
    this.x = x + 7;
    this.y = y - 20;
    this.ctx = ctx;
    this.color = color;
}

Iterations.prototype.draw = function (){
 this.ctx.fillStyle = this.color;
 this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Iterations.prototype.move = function (){
 this.y -= 7;
};

Iterations.prototype.left = function(){ return this.x; }

Iterations.prototype.right = function(){  return this.x + this.width;  }

Iterations.prototype.top = function(){  return this.y; }

Iterations.prototype.bottom = function(){ return this.y + this.height; }
