const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundsunrise;

var bg ;
var sunrise1 ;
var sunrise2 ;
var sunrise3 ;
var sunrise4 ;
var sunrise5 ;
var sunrise6 ;
var sunrise7 ;
var sunrise8 ;
var sunrise9 ;
var sunrise10 ;
var sunrise11 ;
var sunrise12 ;

function preload() {
    sunrise1 = loadImage(sunrise1.png);
    sunrise2 = loadImage(sunrise2.png);
    sunrise3 = loadImage(sunrise3.png);
    sunrise4 = loadImage(sunrise4.png);
    sunrise5 = loadImage(sunrise5.png);
    sunrise6= loadImage(sunrise6.png);
    sunrise7 = loadImage(sunrise7.png);
    sunrise8 = loadImage(sunrise8.png);
    sunrise9 = loadImage(sunrise9.png);
    sunrise10 = loadImage(sunrise10.png);
    sunrise11 = loadImage(sunrise11.png);
    sunrise12 = loadImage(sunrise12.png);

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundsunrise()

}

function draw(){
    
    background(colour);

    Engine.update(engine);

    


}

async function getBackgroundsunrise(){

    var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJSON=await response.json();
    var time=responseJSON.datetime
    var hour = time.slice(11, 13);
    if(hour>=04&&hour<=06){
        bg="sunrise1.png"
    }
    else if(hour>=06 && hour<=08){
        bg="sunrise2.png"
    }
    else if(hour>=08 && hour<=10){
        bg ="sunrise3.png"
    }
    else if(hour>=10 && hour<=12){
        bg ="sunrise4.png"
    }
    else if(hour>=12 && hour<=14){
        bg ="sunrise5.png"
    }
    else if(hour>=14 && hour<=16){
        bg ="sunrise6.png"
    }
    else if(hour>=16 && hour<=18){
        bg ="sunrise7.png"
    }
    else if(hour>=18 && hour<=20){
        bg ="sunrise8.png"
    }
    else if(hour>=20 && hour<=22){
        bg ="sunrise9.png"
    }
    else if(hour>=22 && hour<=24){
        bg ="sunrise10.png"
    }
    else if(hour==0 && hour<=03){
        bg ="sunrise11.png"
    }
    else{
        bg ="sunrise12.png"
    }
    backgroundsunrise=loadImage(bg);    
}
