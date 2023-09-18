function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(51, 0.4);
  describe('A canvas with a transparent gray background.');

  rectMode(CORNER);
  fill(255);
  colorMode(RGB);
  stroke(0);

  fill('#b0b0b0');
  noStroke();
  rect(0, 400, 1000, 500);
  fill('#afa2e0');
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
  rect(600, 340, 150, 20);
  rect(600, 340, 20, 100);
  rect(730, 200, 20, 150);
  rect(730, 340, 20, 100);

  fill('#ffe921');
  ellipse(805, 120, 50, 50);
  fill('#ffffff');
  rect(800, 0, 10, 80);
  rect(755, 80, 100, 50, 15, 15);

  fill(0, 0, 0);
  rect(290, 45, 310, 160);

  fill('#00EE40');
  noStroke();
  colorMode(HSL);
  fill(230, 80, 60);
  rect(300, 50, 290, 150);
  fill('#c7d5d9');
  rect(430, 100, 120, 99);
  fill('#9caaad');
  rect(550, 100, 40, 99);
  fill('#e89127');
  ellipse(350, 110, 60, 60);

  fill(700, 300, 0);
  rect(350, 190, 40, 60, 10);
  rect(370, 200, 40, 15);
  rect(370, 230, 40, 15);
  rect(400, 200, 15, 45, 10, 10);
  rect(300, 120, 290, 10);
  rect(440, 50, 10, 150);
}
