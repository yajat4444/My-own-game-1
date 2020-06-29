var database;
database=firebase.database();
var PLAY3 = 4;
var PLAY1 = 1;
var PLAY2 =3;
var END = 0;
var START =2;
var gameState = START;
var players=[];
var P1;
var P2;
var P3;
var P4;

players=[P1,P2,P3,P4];
P1="politician-s-fight/P1";
P2="politician-s-fight/P2";
P3="politician-s-fight/P3";
P4="politician-s-fight/P4";
var objects=[];
objects=[o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14,o15,o16,o17];
var p1=createSprite(100,200,40,20);

var p2=createSprite(100,200,40,20);
var p3=createSprite(100,200,40,20);

var p4=createSprite(100,200,40,20);
p1=P1;
p2=P2;
p3=P3;
p4=P4;
var o1=createSprite(65,300,20,10);

var o2=createSprite(145,307,20,10);

var o3=createSprite(175,318,20,10);

var o4=createSprite(200,300,20,10);

var o5=createSprite(244,300,20,10);

var o6=createSprite(295,300,20,10);

var o7=createSprite(330,305,20,10);

var o8=createSprite(370,305,20,10);

var o9=createSprite(20,375,20,10);

var o10=createSprite(70,375,20,10);

var o11=createSprite(130,375,20,10);

var o12=createSprite(185,375,20,10);

var o13=createSprite(244,375,20,10);

var o14=createSprite(275,375,20,10);
var o15=createSprite(300,375,20,10);

var o16=createSprite(325,375,20,10);
var o17=createSprite(370,375,20,10);


function preload(){
  p1=loadImage("../images/modi.jpg");
  p2=loadImage("../images/amit.png");
  p3=loadImage("../images/rahul.png");
  p4=loadImage("../images/sonia.png");
  p5=loadImage("../images/arvind.png");
  p6=loadImage("../images/amit.png");
  p7=loadImage("../images/mayavati.png");
  p8=loadImage("../images/satish.png");
  o1.loadImage("../images/big bomb.png");
  o2.loadImage("../images/box.png");
  o3.loadImage("../images/cutting objects.png");
  o4.loadImage("../images/ice.png");
  o5.loadImage("../images/big bomb.png");
  o6.loadImage("../images/box.png");
  o7.loadImage("../images/cutting objects.png");
  o8.loadImage("../images/ice.png");
  o9.loadImage("../images/L-shaped wall.png");
  o10.loadImage("../images/replacing wall.png");
  o11.loadImage("../images/small bomb.png");
  o12.loadImage("../images/spike.png");
  o13.loadImage("../images/star.png");
  o14.loadImage("../images/thorns.png");
  o15.loadImage("../images/two boxes having space between them.png");
  o16.loadImage("../images/wall.png");
  o17.loadImage("../images/weak wall.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  database=firebase.database();
  
}

function draw() {
background("white");

if(gameState===START){
  this.input.display();
  this.button.display();
  
}
if(mousePressedOver(this.button)){
gameState=PLAY1;
}
if(players.exists){
gameState=PLAY2;

}
if(gameState===PLAY1){
  this.greeting();
}
if(gameState===PLAY2){

lines();
playSound("audio.mp3", true);
//o1
if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o2
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o3
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o4
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o5
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o6
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o7
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o2.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
//o8
if(mousePressedOver(o8)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();

if(mousePressedOver(o1)){

o2.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o3)){

o1.destroy();
o2.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o4)){

o1.destroy();
o3.destroy();
o2.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o5)){

o1.destroy();
o3.destroy();
o4.destroy();
o2.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o6)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o2.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o7)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o2.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o2)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o9)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o2.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o10)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o2.destroy();
o11.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o11)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o2.destroy();
o12.destroy();
o13.destroy();
}
if(mousePressedOver(o12)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o2.destroy();
o13.destroy();
}
if(mousePressedOver(o13)){

o1.destroy();
o3.destroy();
o4.destroy();
o5.destroy();
o6.destroy();
o7.destroy();
o8.destroy();
o9.destroy();
o10.destroy();
o11.destroy();
o12.destroy();
o2.destroy();
}  
}
}
if(gameState===START){
this.button();
this.input();
p1.hide();
p2.hide();
p3.hide();
p4.hide();
p5.hide();
p6.hide();
p7.hide();
p8.hide();
o1.hide();
o2.hide();
o3.hide();
o4.hide();
o5.hide();
o6.hide();
o7.hide();
o8.hide();
o9.hide();
o10.hide();
o11.hide();
o12.hide();
o13.hide();
}
if(gameState===END){
p1.hide();
p2.hide();
p3.hide();
p4.hide();
p5.hide();
p6.hide();
p7.hide();
p8.hide();
o1.hide();
o2.hide();
o3.hide();
o4.hide();
o5.hide();
o6.hide();
o7.hide();
o8.hide();
o9.hide();
o10.hide();
o11.hide();
o12.hide();
o13.hide();
}



p1.scale=0.5;
p2.scale=0.5;
p3.scale=0.3;
p4.scale=0.2;
p5.scale=0.43;
p6.scale=0.5;
p7.scale=0.37;
p8.scale=0.5;
o1.scale=0.1;
o2.scale=0.13;
o3.scale=0.16;
o4.scale=1;
o5.scale=1;
o6.scale=1;
o7.scale=1;
o8.scale=1;
o9.scale=1;
o10.scale=1;
o11.scale=1;
o12.scale=1;
o13.scale=1;


drawSprites();
}
function display(){
  Players=new players;
}
function lines(){
stroke("blue");
line(215,281,215,354);
line(0,280,400,280);
line(127,280,127,354);
line(0,354,400,354);
line(163,280,163,354);
line(183,280,183,353);
line(272,280,272,354);
line(36,355,36,400);
line(104,355,104,400);
line(152,355,152,400);
line(213,355,213,400);
}
