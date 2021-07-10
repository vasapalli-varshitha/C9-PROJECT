var background = createSprite(200,200,10,10);
function setup() 
{
  createCanvas(400,400,400,400);
  
}




function draw() 
{
  background("blue");
 if(keyDown("UP_ARROW"))
  {
   background ("green");
  }
 if(keyDown("DOWN_ARROW"))
  {
   background ("pink");
  }
 if(keyDown("RIGHT_ARROW"))
  {
   background ("yellow");
  }
 if(keyDown("LEFT_ARROW"))
  {
   background ("skyBlue");
  }
drawSprites();
}


