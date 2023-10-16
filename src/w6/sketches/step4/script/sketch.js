let aMover;
let mVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  aMover = new Mover(width / 2, height / 2, 10, 25, 'salmon');
  mVec = createVector();

  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);

  const dirVec = p5.Vector.sub(mVec, aMover.pos);
  dirVec.setMag(0.5);
  aMover.applyForce(dirVec);
  aMover.update();

  background(255);

  aMover.display();
  aMover.displayVectors();
}
