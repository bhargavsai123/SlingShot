class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.05,
    };
    this.slingshot = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.slingshot);
  }
  fly() {
    this.slingshot.bodyA = null;
  }
  attach(bodyA) {
    this.slingshot.bodyA = bodyA;
  }
  display() {
    if (this.slingshot.bodyA) {
      var pointA = this.slingshot.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(5);
      stroke("#fff");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
