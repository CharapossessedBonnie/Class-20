var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);

  movingRect = createSprite(200, 200, 75, 75);
  movingRect.shapeColor = "gray";

  fixedRect = createSprite(400, 200, 75, 75);
  fixedRect.shapeColor = "gray";
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y < movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y < fixedRect.width/2+movingRect.width/2){

    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }

  else{
    movingRect.shapeColor = "gray";
    fixedRect.shapeColor = "gray";
  }

  drawSprites();
}