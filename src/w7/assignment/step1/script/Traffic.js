class Traffic {
  constructor() {
    this.vehicle = [];
  }

  run() {
    this.vehicle.forEach((eachVehicle) => {
      let sepForce = eachVehicle.separate(this.vehicle);
      eachVehicle.applyForce(sepForce);
      eachVehicle.update();
      eachVehicle.borderInfinite();
      eachVehicle.display();
    });
  }

  addVehicle(x, y) {
    this.vehicle.push(
      new Vehicle(x, y, 8, 5, 0.1, color(random(360), 100, 50))
    );
  }
}
