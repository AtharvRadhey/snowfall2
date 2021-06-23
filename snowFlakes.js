class snowFlakes{
    constructor(x,y){
    this.body=Bodies.circle(x,y,20,20);
    this.width = 20;
    this.height = 20;
    this.image=loadImage("snow4.webp");
    World.add(world,this.body);
 
     }
     display(){
     var pos = this.body.position;
     push();
     strokeWeight(2);
     stroke("red");
     fill(255);
     imageMode(RADIUS);
     image(this.image,pos.x,pos.y,this.width,this.height);
     pop();
 
     }
 }
