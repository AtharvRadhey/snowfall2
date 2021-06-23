const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var Snow;
var bg;

function preload(){
 bg=loadImage("snow1.jpg")
}


function setup() {
  var canvas = createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  Snow = new snowFlakes(450,200);
 

}

function draw() {
  background(bg); 
 
Engine.update(engine);

Snow.display();

  drawSprites();
}