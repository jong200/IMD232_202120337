class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.balls = [];
  }

  createBall() {
    this.balls.push(
      new Ball(
        this.emittingPos.x,
        this.emittingPos.y,
        -TAU/360*-90+random(TAU/360)*-30,(TAU/360)*30,
        random(1, 5),
        random(360),
        100,
        50
        //위에서 나타날 떄
      )
    );
  }

  applyGravity(gravity) {
    this.balls.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  applyForce(force) {
    this.balls.forEach((each) => {
      each.applyForce(force);
    });
  }

  update() {
    this.balls.forEach((each) => {
      each.update();
    });

}
    for(let index = this.balls.length -1; index>=0; index--) {
        this.balls[index].update()

    }

  display() {
    this.balls.forEach((each) => {
      each.display();
    });
  }

}

//이원리에서 초기의 값만 바꾸면 됨
//화면 중앙에서 시작하고 초기힘을 360의 힘을 
//중력을 더함

