const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var box1

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 600, 50);
	ground = new Ground(800,height,1600,20)

	box1 = new Dustbin(1300, 680, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:1200, y:-1200});
}
}


