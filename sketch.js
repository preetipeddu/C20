var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(200,200,50,30);

  fixedRect.shapeColor = "purple";
  movingRect.shapeColor = "purple";

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;

  //30/2 = 15
  //50/2 = 25
  //15+25 = 40
}

function draw() {
  background(255,255,255);
  
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);

  //checking collision
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <  fixedRect.width/2 + movingRect.width/2 &&
   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
   fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    //objects are colliding 
    fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
  }
  else{
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }



  //bounce off 
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){

    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  
}

if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
   movingRect.velocityY = movingRect.velocityY * (-1);
   fixedRect.velocityY = fixedRect.velocityY * (-1);
}

  drawSprites();
}