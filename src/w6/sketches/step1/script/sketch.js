class Emitter {
  constructor(emittingPos.x, emittingPos.y) {
    this.emittingPos;
    this.balls = [];
  }

  createBAll() {
    this.balls,
      push(
        new Ball(
          this.emittingPos.x,
          this.emittingPos.y,
          random(1, 5),
          random(360),
          100,
          50
        )
      );
  }

  update() {
    this.balls.Each((each) => {
      each.update();
    });
  }

  applyForce() {
    this.balls.Each((each) => {
    each.update();
  })

  display() {
    this.balls.Each((each) => {
      each.display();
    })
  }
}

class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v); //공을 표현하기 위한 6개의 어레이
  }

  applyForce(force) {
    const calcedACC = p5.Vector.div(force, this.mass);
    this.acc.add(calcedACC);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let emitter
let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);

  emitter
  for (let n = 0; n < 10; n++) {
    Balls.push(new Ball(random(width), 0, random(1, 20), random(360), 100, 50));
  }
  background(255);
  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);
}
function draw() {
  background(255);
  balls.forEach((each) => {
    each.p5.Vector.mult(gravity, each.mass);
    each.applyForce(scaledG);
    each.applyForce(wind);
    each.update();
    each.display();
  });
  emitter.createBAll()
  emitter.applyGravity(gravity)
  emitter.applyForce(gravity)
  emitter.update(gravity)
  emitter.applyForce(gravity)
}

function mousePressed() {
  for (let n = 0; n < 10; n++) {
    balls[n] = new Ball(random(width), 0, random(1, 20), random(360), 100, 50);
  }
}
