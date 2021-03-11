class Surface {
  constructor(x, y, width) {
    var options = {
      isStatic: true,
    };

    this.surface = Bodies.rectangle(x, y, width, 15, options);
    this.width = width;
    World.add(world, this.surface);
  }
  display() {
    noStroke();
    fill("#cccccc");
    rectMode(CENTER);
    rect(this.surface.position.x, this.surface.position.y, this.width, 15);
  }
}
