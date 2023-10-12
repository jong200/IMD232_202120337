let anArray = [];
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  // line(10, 10, 10, height - 10);
  // line(20, 10, 20, height - 10);
  // line(30, 10, 30, height - 10);
  // line(40, 10, 40, height - 10);
  // line(50, 10, 50, height - 10);
  // line(60, 10, 60, height - 10);
  // line(70, 10, 70, height - 10);
  //for에는 (begin초기값; condition조건; step매시행의끝에하는일){조건이부합하는동안할일;}
  //for(let 변수이름=초기값; 변수이름 < 값; 변수이름+= 값){조건이부합하는동안할일;}
  //anArray[숫자]쓰면 그 위치에 있는 숫자를 꺼내줌
  //for(let 변수이름 -0; 변수이름 < 어레이이름.lenrgth; 변수이름++) {어레이이름[변수이름]}

  for (let a = 0; a < width; a += 10) {
    line(a + 10, 10, a + 10, height - 10);
  }
}
function draw() {}
