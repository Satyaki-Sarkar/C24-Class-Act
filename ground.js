class Ground{
    constructor(){
        var groundOptions={
            isStatic: true
        }

        this.body=Bodies.rectangle(650,580,1300,20,groundOptions);
        this.width=1300;
        this.height=20;

        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("Brown");
    rect(pos.x,pos.y,this.width,this.height);
    }
}