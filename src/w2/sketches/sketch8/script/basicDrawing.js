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

  background(51, 0.4);
  describe('A canvas with a transparent gray background.');

  fill(700, 300, 0);
  noStroke();
  ellipse(450, 460, 450, 100);

  fill(100, 50, 0);
  noStroke();
  rect(300, 250, 300, 10);
  rect(310, 260, 280, 50);
  rect(310, 260, 10, 180);
  rect(580, 260, 10, 180);

  fill(100, 50, 0);
  rect(150, 340, 150, 20);
  rect(150, 340, 20, 100);
  rect(150, 200, 20, 150);
  rect(280, 340, 20, 100);
  rect(800, 100, 10, 350);

  rect(600, 340, 150, 20);
  rect(600, 340, 20, 100);
  rect(730, 200, 20, 150);
  rect(730, 340, 20, 100);

  fill(20, 0, 0);
  rect(290, 45, 310, 160);

  fill(60, 500, 500);
  colorMode(HSL);
  noStroke();
  rect(300, 50, 290, 150);

  fill(700, 300, 0);
  rect(420, 150, 50, 100);
  ellipse(290, 45, 310, 160);
}
