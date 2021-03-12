class Block {
  constructor(x, y) {
    var options = {
      friction: 0.00001,
      restitution: 0.5,
      density: 0.001,
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, 50, 50);
    pop();
  }
}
