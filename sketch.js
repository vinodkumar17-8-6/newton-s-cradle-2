
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var topRoof;

var bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {

	createCanvas(1200, windowHeight);

	engine = Engine.create();
	world = engine.world;

	topRoof = new roof(600,150,600,30);

	bob1 = new bob(400,600,50);
	bob2 = new bob(500,600,50);
	bob3 = new bob(600,600,50);
	bob4 = new bob(700,600,50);
	bob5 = new bob(800,600,50);

	rope1 = new rope(bob1.body,topRoof.body,-200,0);
	rope2 = new rope(bob2.body,topRoof.body,-100,0);
	rope3 = new rope(bob3.body,topRoof.body,0,0);
	rope4 = new rope(bob4.body,topRoof.body,+100,0);
	rope5 = new rope(bob5.body,topRoof.body,+200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  
  topRoof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
    
}