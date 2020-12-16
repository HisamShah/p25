const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject,dust1	
var world;
function setup() 
{
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
	dust1=new Dust(1200,630,200,150)
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dust1.display() 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

}

function keyPressed() {
	  if (keyCode === UP_ARROW)
	   {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95});
  	   }
}

