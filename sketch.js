const { Engine, World, Body, Bodies, Constraint } = Matter;

var engine, world;
var ground, surface1, surface2, surface3;
var block1, block2, block3, block4, block5;
var ball, anchor, sling;

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  surface1 = new Surface(600, 270, 250);
  surface2 = new Surface(420, 160, 150);
  surface3 = new Surface(650, 70, 200);

  block1 = new Block(500, 240);
  block2 = new Block(550, 240);
  block3 = new Block(600, 240);
  block4 = new Block(650, 240);
  block5 = new Block(700, 240);

  block6 = new Block(530, 190);
  block7 = new Block(580, 190);
  block8 = new Block(630, 190);
  block9 = new Block(680, 190);

  block10 = new Block(370, 130);
  block11 = new Block(420, 130);
  block12 = new Block(470, 130);
  block14 = new Block(625, 40);
  block15 = new Block(725, 40);
  block16 = new Block(575, 40);
  block17 = new Block(675, 40);
  block18 = new Block(400, 80);
  block19 = new Block(450, 80);

  ball = Bodies.circle(100, 200, 20);
  World.add(world, ball);

  anchor = { x: 100, y: 200 };

  sling = new Slingshot(this.ball, anchor);
  World.add(world, sling);
}

function draw() {
  background("#333333");

  Engine.update(engine);

  ground.display();

  surface1.display();
  surface2.display();
  surface3.display();

  fill("#ff6347");
  block1.display();
  fill("#395853");
  block2.display();
  fill("#e4d03f");
  block3.display();
  fill("#ff69b4");
  block4.display();
  fill("#a930de");
  block5.display();
  fill("#40e0d0");
  block6.display();
  fill("#6a5acd");
  block7.display();
  fill("#f4a460");
  block8.display();
  fill("#4169e1");
  block9.display();

  fill("#ff6347");
  block15.display();
  fill("#395853");
  block11.display();
  fill("#e4d03f");
  block14.display();
  fill("#f4a460");
  block12.display();
  fill("#a930de");
  block10.display();
  fill("#40e0d0");
  block16.display();
  fill("#6a5acd");
  block17.display();
  fill("#ff69b4");
  block18.display();
  fill("#4169e1");
  block19.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);
  sling.display();
  drawSprites();
}
function mouseDragged() {
  Body.setPosition(ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  sling.fly();
}
