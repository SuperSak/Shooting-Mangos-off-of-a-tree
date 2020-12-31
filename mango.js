class Mango{
    constructor(x,y,r){
        this.thing=0
        var options={
            'restitution':0,
            'friction':1,
            'isStatic':true
        }
        this.Image = loadImage('mango.png')
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.Image, pos.x, pos.y, this.r, this.r)
        this.body.scale=1000000
    }

}
