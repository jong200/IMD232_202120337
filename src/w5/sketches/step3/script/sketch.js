const strupeNum = 20;
const strupeNum2 = 15;
const strupeBegin = 15;
const strupeGap = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}
function draw() {
  background(255);

  noStroke();
  // fill('salmon');

  // for (let a = 0; a < strupeNum; a++) {
  //   const rectWidth = width / (strupeNum + strupeNum + 1);
  //   const rectx = (width / (strupeNum + strupeNum + 1)) * (2 * a + 1);
  //   rect(rectx, 0, rectWidth, height);
  // }

  // for (let a = 0; a < strupeNum; a++) {
  //   const rectHeight = height / (strupeNum + strupeNum + 1);
  //   const rectY = (height / (strupeNum + strupeNum + 1)) * (2 * a + 1);
  //   rect(0, rectY, width, rectHeight);
  // }

  rectMode(CENTER);
  for (let a = 0; a < strupeNum; a++) {
    //for구문을 2개로 만들면 계속 되돌아감, 이중으로 덮혀서 사용할 수 있음, 겉에 구문이돌고 안 구문이 도는식
    for (let b = 0; b < strupeNum2; b++) {
      fill((255 / strupeNum) * a, (255 / strupeNum2) * b, 255);
      let x = ((a + 1) * width) / (strupeNum + 1);
      let y = ((b + 1) * height) / (strupeNum2 + 1);
      if (a % 2 == 0) {
        ellipse(x, y, 10);
      } else {
        rect(x, y, 10);
      }
    }
  }

  // for (let a = strupeBegin; a < innerWidth; a += 2 * strupeGap) {
  //   rect(a, 0, strupeGap, height);
  // }
}
