let pos;
let vel;
let radius = 25;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVectoer(width / 2, height / 2);
  vel = createVectoer(3, 5);
  console.log(pos);
  console.lor(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  pos.add(vel);
  //if (pos.x < 0) {
  if (pos.x - radius < 0|| pos.x
    //vel.x *= -1;
  //} else if (pos.x > width) {
  //  vel.x *= -1;
    ellipse(pos.x, pos.y, 2 * radius);
  }
}
