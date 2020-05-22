const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
function setup(){
  createCanvas(800,600);
  engine = Engine.create();
	world = engine.world;
  
  ball =new Ball(400,300,30);
  //constraint= new Chain({x:400,y:10},ball.body)
  holder= new Holder();
  launcher = new Launcher(ball.body,{x: 400, y: 10});
}
function draw(){
  background("white");
  
  Engine.update(engine);
  strokeWeight(4);
 
  ball.display();
  holder.display();
  launcher.display();
  if(launcher.sling.bodyA){
  pointA = launcher.sling.bodyA.position
  pointB = launcher.sling.pointB
  fill("red")
  line(pointA.x, pointA.y, 400, 10);
  }
  text("Prakhar",200,200);
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  launcher.fly();
  
}


