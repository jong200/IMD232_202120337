let position;
let velocity;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  position = createVector(100, 100);
  velocity = createVector(2.5, 2);
}

function draw() {
  background(255);

  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  position.x += velocity.x;
  position.y += velocity.y;

  stroke(0);
  fill(0);
  strokeWeight(2);
  circle(position.x, position.y, 45);

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);

  translate(mouseX, mouseY);
  line(0, 0, mouse.x, mouse.y);
}
