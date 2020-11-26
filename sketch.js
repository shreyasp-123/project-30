const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var polygon_img, polygon

function preload(){
  polygon_img = loadImage("polygon.png")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  

  stand1 = new Ground(300, 390, 300, 5)
  stand2 = new Ground(600, 260, 250, 5)

  block1 = new Box(300, 370, 30, 40)
  block2 = new Box(270, 370, 30, 40)
  block3 = new Box(240, 370, 30, 40)
  block4 = new Box(210, 370, 30, 40)
  block5 = new Box(330, 370, 30, 40)
  block6 = new Box(360, 370, 30, 40)
  block7 = new Box(390, 370, 30, 40)
  block8 = new Box(300, 330, 30, 40)
  block9 = new Box(270, 330, 30, 40)
  block10 = new Box(330, 330, 30, 40)
  block11 = new Box(240, 330, 30, 40)
  block12 = new Box(360, 330, 30, 40)
  block13 = new Box(300, 290, 30, 40)
  block14 = new Box(270, 290, 30, 40)
  block15 = new Box(330, 290, 30, 40)
  block16 = new Box(300, 250, 30, 40)
  block17 = new Box(600, 240, 30, 40)
  block18 = new Box(570, 240, 30, 40)
  block19 = new Box(540, 240, 30, 40)
  block20 = new Box(630, 240, 30, 40)
  block21 = new Box(660, 240, 30, 40)
  block22 = new Box(600, 210, 30, 40)
  block23 = new Box(570, 210, 30, 40)
  block24 = new Box(630, 210, 30, 40)
  block25 = new Box(600, 180, 30, 40)

  polygon = Bodies.circle(50, 200, 20)
  World.add(world, polygon);

  slingShot = new SlingShot(polygon, {x:100, y:200})


  Engine.run(engine);
}

function draw() {
  background(255);  
  stand1.display()
  stand2.display()

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  slingShot.display()
  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY}); 
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon)
  }
}