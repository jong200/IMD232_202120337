function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);

  rect(100, 100, 50);
  ellipse(100, 100, 50);
  background('rgba(0,255,0, 0.25)');
  describe('A canvas with a transparent green background.');

  rect(100, 100, 50);
  ellipse(200, 100, 50);

  noStroke();
  rect(400, 100, 50);
  ellipse(200, 200, 50);

  fill(255, 127, 0);
  colorMode(HSL);
  noStroke();
  rect(400, 100, 50);
  ellipse(200, 200, 50);

  stroke('red');
  line(250, 400, 150, 450);
  strokeWeight(5);
  line(250, 400, 250, 450);
}
