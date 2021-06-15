
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() { }
 function setup() 
 {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world; 
	block_options={ isStatic:true } 
	block1 = Bodies.rectangle(200,200,100,20,block_options);
    World.add(world,block1); 
	Engine.run(engine);
} 
		 
		 
		 
function draw() 
{
	rectMode(CENTER); 
	background(0);
	rect(block1.position.x,block1.position.y);
	
	drawSprites();
}
			 



