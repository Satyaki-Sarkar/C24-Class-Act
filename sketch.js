const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5, ground;
var pig1,pig2,log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(1000,550,60,60);
    box2=  new Box(850,550,60,60);
    box3= new Box(1000,460,60,60);
    box4=  new Box(850,460,60,60);
    box5=new Box(925,350,60,60);


    pig1=new pig(925,550);
    pig2=new pig(925,460);

    bird1=new Bird(100,100);

    log1=new logs(925,520,220,PI);
    log2=new logs(925,410,220,PI);
    log3=new logs(850,300,100,-PI/4);
    log4=new logs(980,300,100,PI/6);
    ground=new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
   
}