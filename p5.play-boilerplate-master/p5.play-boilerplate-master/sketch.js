var movingRect ,fixedRect,gameObject;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(700, 200, 80, 20);
  fixedRect = createSprite(700, 400, 30, 80);
  gameObject = createSprite(700, 300, 30, 80);
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  gameObject.shapeColor="green"
  movingRect.debug=true;
  fixedRect.debug=true;
  movingRect.velocityY=1
  fixedRect.velocityY=-1
}

function draw() {
  background("black");  
  

  if(collision(movingRect,gameObject)){
    movingRect.shapeColor='red';
    gameObject.shapeColor="red"
  }
  else {
    movingRect.shapeColor="green"
    gameObject.shapeColor="green"
  }
  bounceOff(movingRect,fixedRect);
 

  drawSprites();
}

