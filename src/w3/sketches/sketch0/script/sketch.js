function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
}

function draw() {
  ellipse(mouseX, mousey, 50);
}
