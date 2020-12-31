const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;75
const Constraint = Matter.Constraint;
var boy, boyImage, tree, treeImage;
var stone, sling, m1, m2, m3, m4, m5, ground;
function preload()
{
	boyImage = loadImage("boy.png")
	treeImage= loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	Engine.run(engine);
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
	m1 = new Mango(400,323,75)
	m2 = new Mango(508,254,75)
	m3 = new Mango(600,200,75)
	m4 = new Mango(734,300,75)
	m5 = new Mango(580,328,75)
	ground = new Ground(width/2, height, width, 20)
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);
	//console.log(mouseX, mouseY)
	detectCollision(stone,m1)
	detectCollision(stone,m2)
	detectCollision(stone,m3)
	detectCollision(stone,m4)
	detectCollision(stone,m5)
	drawSprites();
	stone.display()
	m1.display()
	m2.display()
	m3.display()
	m4.display()
	m5.display()
	sling.display()
	ground.display()
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
function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.width){
		Matter.Body.setStatic(lmango.body,false)
	}
}