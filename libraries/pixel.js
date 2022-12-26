
class Pixel{
  
    constructor(x,y,limx,limy){
      colorMode(HSB, 100);
      this.limits = {limx: limx, limy: limy};
      this.friction = 0.3;
      this.pos = {x: x, y: y};
      this.vel = {x: 0, y: 0};
      this.acc = {x: 0, y: 0};
      this.col = color(random(100),100,100);
    }
  
    move(){
      this.vel.x *= this.friction;
      this.vel.y *= this.friction;
      this.vel.x += this.acc.x;
      this.vel.y += this.acc.y;
      this.acc = {x: 0, y: 0};
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
      // this.pos.x = ((this.pos.x < 0) ? this.limits.limx + (this.pos.x % this.limits.limx) : this.pos.x % this.limits.limx);
      // this.pos.y = ((this.pos.y < 0) ? this.limits.limy + (this.pos.y % this.limits.limy) : this.pos.y % this.limits.limy);
      if(this.pos.x < 0 || this.pos.x > BOUNDS.x)
        this.newPos();
      if(this.pos.y < 0 || this.pos.y > BOUNDS.y)
        this.newPos();
    }
  
    applyForce(x,y){
        this.acc = {x: x, y: y};
    }
  
    draw(){
        // line(this.pos.x, this.pos.y, this.lastPos.x, this.lastPos.y);
        stroke(this.col);
        point(this.pos.x, this.pos.y);
    }
  
    newPos(){
      this.pos = {x: random(BOUNDS.x), y: random(BOUNDS.y)};
    }
  }