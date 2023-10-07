class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  applyForce(force){
    //force.div(this.mass);
    let divedForce=p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //가속도 계산, 매프레임마다 가속도는 완전 초기화
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;

  }else if(this.pos.x > width -1 - this.radius) {
  let delta=this.pos.x-(width-1-this.radius
  this.pos.x+= -2*delta);
  sthis.vel.x*=-1;

   if (this.pos.x < 0 + this.radius) {
                let delta = this.pos.x - (0 + this.radius);
                this.pos.x += -2 * delta;
                this.vel.x *= -1;
    }
    display(){
        ellipse(pos.x, pos.y, 2 *this.radius)
    }
  }
}
}
