class Ground {
  constructor() {
    var options = {
      isStatic: true,
    };

    this.ground = Bodies.rectangle(400, 395, 800, 15, options);
    World.add(world, this.ground);
  }
  display() {
    noStroke();
    fill("#cccccc");
    rectMode(CENTER);
    rect(this.ground.position.x, this.ground.position.y, 800, 15);
  }
}
