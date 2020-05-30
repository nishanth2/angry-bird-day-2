const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3;
var ground

function setup(){
 //create the canvas
 var canvas = createCanvas(400,400);

 //create the engine and the world
 engine = Engine.create();
 world = engine.world;

 //create the boxes
 box1 = new Box(200,300,50,50);
 box2 = new Box(240,100,50,100);
 box3 = new Box(200, 0, 20, 20);

 //create the ground
 ground = new Ground(200,390,400,20);
}

function draw(){
 //give the background colour
 background(0);

 //update the engine
 Engine.update(engine);

 //display the boxes
 box1.display();
 box2.display();
 box3.display();

 //display the ground
 ground.display();
}