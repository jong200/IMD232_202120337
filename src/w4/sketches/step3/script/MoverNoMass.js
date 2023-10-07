class MoverNoMass {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = r;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  checkEdge() {
    if (this.pos.x < 0) {
      //   //   0보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      // //   그 뚫고간 거리에 -1을 곱해 방향을 뒤집고,
      //   delta *= -1;
      // //   0을 기준으로 뒤집힌 거리를 더해준다.
      //   this.pos.x = 0 + delta;
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= 1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= 1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= 1;
    }
  }
  dispaly() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  dispalyVecter() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 100,
      this.pos.y + this.vel.y * 100
    );
  }
}
