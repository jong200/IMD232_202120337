let x, y;
const rad = 50;
let isDragging = false;
let movableObj;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  x = width / 2;
  y = height / 2;

  movableObj = new MovableObj(width / 4, height / 4, 50);
  background(255);
}

function draw() {
  background(255);
  display();
  movableObj.display();
}

function chkHover(mX, mY) {
  const distSq = (x - mX) ** 2 + (y - mY) ** 2;
  return distSq <= rad ** 2;
}

function display() {
  noStroke();
  fill('salmon');
  ellipse(x, y, 3 * rad);
}

function mouseMoved() {
  isHover = chkHover(mouseX, mouseY);
  movableObj.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  if (isHover) {
    isDragging = true;
    deltaX = mouseX - x;
    deltaY = mouseY - y;
  }
  movableObj.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  if (isDragging) {
    x = mouseX - deltaX;
    y = mouseY - deltaY;
  }
  movableObj.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  isDragging = false;
  movableObj.mouseReleased();
}
