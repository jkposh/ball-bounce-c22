const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

var ground,ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {

    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);

  World.add(myWorld,ground);
  console.log(ground); 

  var ball_options = {

   restitution: 1


  }

  
  ball = Bodies.circle(200,200,20,ball_options)

  World.add(myWorld,ball);
  
  //console.log(object.position.x);
 //console.log(object.position.y);
  //console.log(object.type);
}

function draw() {
  background(0);  

  Engine.update(myEngine);

  rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);
   ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);

}