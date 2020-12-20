function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weigth=random(400,1500);
car.velocityX = speed;
}
var car,wall;
var speed,weigth;
function draw() {
  background(80,80,80);  
  drawSprites();
}