
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  var options ={
    restitution:2
    //frictionAir:0.01
  };
 ball = Bodies.circle(100,260,10,options) 
 World.add(world,ball) ;
  rectMode(CENTER);
  //ellipseMode(RADIUS);
  wedge = Bodies.rectangle(100,200,100,10,ground_options) 
  World.add(world,wedge);


}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("red")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  push  ()
  Body.rotate(wedge,angle)
  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,100,10);
  pop ()
  angle = angle+1;
}

