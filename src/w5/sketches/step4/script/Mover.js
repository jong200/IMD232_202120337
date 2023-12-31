class Mover {
  constructor(x, y, mass, rad, color) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.rad = rad;
  }
  applyForce(force) {
    const forceDividedByMAss = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMAss);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  dispaly() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  displayVectors() {
    stroke('red');
    strokeWeight(1);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
  }
}
