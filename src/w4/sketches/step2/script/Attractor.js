class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    distance = constrain(distance, 5, 25);
    let strength = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);

    // .mag 길이를 알려주는 것
    // .setMag 특정 길이로 조정해줘
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
