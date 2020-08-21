class logs {
  constructor(x, y, width, angle) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0,
        frictionStatic: 2
    }
    this.body = Bodies.rectangle(x, y, width, 20, options);
    Matter.Body.setAngle(this.body,angle);
    this.width = width;
    this.height = 20;
    
    World.add(world, this.body);
  }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("Blue");
    stroke("Red");
    strokeWeight(5);
    rect(0,0, this.width, this.height);
    pop();
  }
};
