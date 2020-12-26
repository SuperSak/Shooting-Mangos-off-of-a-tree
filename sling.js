class Slingshot{
    constructor(bodyA, pointB){
        var options = {
           length:10,
           stiffness:0.04, 
           bodyA:bodyA,
           pointB:pointB
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options)
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA){
            var pA=this.sling.bodyA.position
            var pB=this.pointB;
            push()
            strokeWeight(4)
            line(pA.x,pA.y,pB.x,pB.y)
            pop()
        }
        
    }
}