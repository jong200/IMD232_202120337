function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  Mover = new MoverNoMass(width / 2, height / 2);
}
function draw() {
  background(255);
  Mover.display();
}
