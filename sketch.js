function setup() {
createCanvas(1200,800);

fixedRect = createSprite(400,250,60,60);
fixedRect.shapeColor = "red";

movingRect = createSprite(500,300,70,80);
movingRect.shapeColor = "red"

fixedRect.debug = true; 
movingRect.debug = true; 
}

function draw() {
  background(255,255,255);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}
else
{
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "red"
}


  drawSprites();
}