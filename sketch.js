const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, boyImage, tree, treeImage;
var stone, sling, m1, m2, m3, m4, m5;
function preload()
{
	boyImage = loadImage("boy.png")
	treeImage= loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	
	boy = createSprite(75,500)
	boy.addImage(boyImage)
	boy.scale=0.1
	tree = createSprite(575,400)
	tree.addImage(treeImage)
	tree.scale=0.5
	engine = Engine.create();
	world = engine.world;
	stone = new Stone(100, 500, 50, 50)
	sling = new Slingshot(stone.body, {x:100, y:500})
	m1 = new Mango(400,323,25)
	m2 = new Mango(508,254,25)
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  //console.log(mouseX, mouseY)
  collide(stone, m1, m1.fall())
  collide(stone, m2, m2.fall())
  drawSprites();
  stone.display()
  m1.display()
  m2.display()
  console.log(m1.radius)
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
    stone.trajectory=[]
}
function keyPressed(){
	if(keyCode===32){
	 Matter.Body.setPosition(stone.body,{x:100,y:500})
	 sling.attach(stone.body)
	 } 
}
function collide(obj1, obj2, action){
	if (obj1.x-obj2.x<=obj2.r/2+obj1.width/2
	  && obj2.x-obj1.x<=obj2.r/2+obj1.width/2
      && obj1.y-obj2.y<=obj2.r/2+obj1.height/2
	  && obj2.y-obj1.y<=obj2.r/2+obj1.height/2
	  ){
	  action
	}
}
