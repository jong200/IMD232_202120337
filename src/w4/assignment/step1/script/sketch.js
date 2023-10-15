let bodies = [];
const bodyNum = 30;
let G = 1;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }

    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}
bodies.forEach((anyName) => {
  anyName.display();
  anyName.displayVectors();
});

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 50; i++) {
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}
