let dataPoint = [];
let actRandomSeed = 42;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  frameRate(2);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
  }

  background(255);
}

function draw() {
  dataPoint[dataPoint.length - 1] = map(mouseY, 0, height, 1, 0);
  background(255);
  noStroke();
  fill(0);
  randomSeed(actRandomSeed);

  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 10);
  }
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 2];
  }

  stroke(0);
  noFill();
  beginShape();
  for (let x = 0; x < width; x += 10) {
    let y = (0, height);
    vertex(x, y);
  }
  endShape();
}
randomSeed(actRandomSeed);
for (let x = 0; x < width; x += 10) {
  let y = random(0, height);
}
mousePressed = function () {
  actRandomSeed = random(100000);
};

keyReleased = function () {
  if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
};
