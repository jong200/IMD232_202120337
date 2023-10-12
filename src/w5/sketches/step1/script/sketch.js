let aVariable = 20;
let anArray = [30, 60, 90]; //하나의 변수가 아닌 여러개를 가지고 있음
let anotherArray = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  console.log('aVariable', aVariable);
  console.log('anArray', anArray);
  console.log('anArray[0]', anArray[0]); //시작하는 숫자가 0
  console.log('anArray.length', anArray.length); //나한테 저장되어있는 숫자
  console.log('anotherArray', anotherArray);
  anotherArray.push('어레이에 넣은 첫 데이터'); //데이터 사후에 넣어주는 방식
  console.log('anotherArray[0]', anotherArray[0]); //알수 없다고 나옴
  anotherArray.push(50);
  console.log('anotherArray[1]', anotherArray[1]); //알수 없다고 나옴

  background(255);
}
function draw() {}
