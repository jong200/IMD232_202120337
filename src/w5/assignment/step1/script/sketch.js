const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);
  fill(0);

  for (let a = 0; a < cNum; a++) {
    for (let b = 0; b < rNum; b++) {
      fill((255 / cNum) * a, (255 / rNum) * b, 255);
      let x = ((a + 1) * width) / (cNum + 1);
      let y = ((b + 1) * height) / (rNum + 1);
      if (a % 1 == 0) {
        ellipse(x, y, 50);
      }
    }
  }

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      translate(width / 2, height / 2);
      rotate((TAU / 360) * 15);
      pop();
    }
  }

  angleBegin += angleBeginVel;

  function angleBeginVel(angleAsFrame) {
    return TAU / angleAsFrame;
  }
}
