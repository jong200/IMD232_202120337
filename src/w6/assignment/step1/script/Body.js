class Body {
  constructor(x, y, mass) {
    this.pos = createVector(x, y, mass);
    this.vel = createVector(0, 0, mass);
    this.acc = createVector(0, 0, mass);
    this.mass = 8;
    this.rad = this.mass ** (1 / 2) * 4;
  }

  attract(body) {
    const force = p5.Vector.sub(this.pos, body.pos);
    const distance = constrain(force.mag(), 5, 25);
    const strength = (G * (this.mass * body.mass)) / distance ** 2;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}
