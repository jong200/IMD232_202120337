let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVectoer(width / 2, height / 2);
  vel = createVectoer(3, 5);
  acc = createVectoer()
  console.log(pos);
  console.lor(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  acc=p5.Vector.random2D();
  acc.mult(random(3))
  vel.add(acc);
  pos.add(vel);
if (pos.x  <0)
pos.x=width
  }else if (pos.x>width){

  }
}

function infiniteEdge(){
  if (pos.x  <0)
pos.x=width
  }else if (pos.x>width)
}