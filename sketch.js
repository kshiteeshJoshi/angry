const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird,slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(800, 150, 400, 20);
    
    box01 = new Box(810,100,30,30);
    box02 = new Box(810,120,30,30);
    box03 = new Box(700,100,30,30);
    box04 = new Box(700,120,30,30);
    box05 = new Box(920,100,30,30);
    box06 = new Box(920,120,30,30);
    box = new Box(920,320,30,30);
    box1 = new Box(700,320,30,30);
    box2 = new Box(920,320,30,30);
    box3 = new Box(810,350,30,30);
    box4 = new Box(810,260,30,30);
    box5 = new Box(700,320,30,30);
    box6 = new Box(700,260,30,30);
    box7 = new Box(920,320,30,30);
    box8 = new Box(810,320,30,30);
    box9 = new Box(700,320,30,30);
    box10 = new Box(810,320,30,30);
    box11 = new Box(700,320,30,30);
    box12 = new Box(810,320,30,30);
    box13 = new Box(920,260,30,30);
    box14 = new Box(920,320,30,30);

    bird = new Bird(200,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    
    box01.display();
    box02.display();
    box03.display();
    box04.display();
    box05.display();
    box06.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display(); 

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot = new Slingshot(bird.body,{x:400, y:100});
        slingshot.attach(bird.body);
    }
}
function mouseReleased(){
    slingshot.fly();
}