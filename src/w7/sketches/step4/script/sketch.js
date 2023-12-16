let angle = 0;
let angleStart = 0;
let angleStartAdd = 0;
let actRandomSeed = 8;
const angleVel = 0.2;
const amplitude = 100;
const gap = 20;
const rad = 1;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  background(255);

  angleStartAdd = (TAU / 360) * 1;
}

function draw() {
  background(255);

  angle = angleStart;

  stroke(0);
  strokeWeight(1);
  fill(0, 130, 164);

  for (let x = 0; x <= width; x += gap) {
    let y = map(sin(angle), -1, 1, 0, height - 1);
    circle(x, y + height, 500);
    angle += angleVel;
  }

  randomSeed(actRandomSeed);
  for (let x = 0; x < width; x += 10) {
    let y = random(0, height);

    mousePressed = function () {
      actRandomSeed = random(100000);
    };
  }

  angleStart += angleStartAdd;
}
