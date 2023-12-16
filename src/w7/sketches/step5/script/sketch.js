class Pado {
  constructor(amp, period, phase) {
    this.amplitude = amp;
    this.period = period;
    this.phase = phase;
  }

  calculate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period) * this.amplitude;
  }
}
//let Pado;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  Pado = new Pado(50, 300, 10);
}

function draw() {
  background(255);
  noStroke();
  fill(0, 130, 164);

  for (let x = 0; x < Width; x += 10) {
    let y = Pado.calculate(x);
    ellipse(x, y + heghigt / 2, 10);
  }
}
