let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);
  posX += posXAdd;
  posY += posYAdd;
  //posX = posX + 1;
  //pos +=1;
  ellipse(posX, posY, 50);
}
