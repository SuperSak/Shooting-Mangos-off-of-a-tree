class Mango{
    constructor(x,y,r){
        this.thing=0
        var options={
            'restitution':0,
            'friction':1,
            'isStatic':true
        }
        
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    fall(){
        Matter.Body.setStatic(this.body,false)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(200,50,255);
        strokeWeight(3)
        stroke(100,255,50)
        ellipse(0,0,this.r,this.r);
        pop();
    }

}
