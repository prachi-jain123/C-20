var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  movingrect=createSprite(600,200,50,30);
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2) {
   movingrect.shapeColor = "purple"
   fixedrect.shapeColor = "purple"
  }
 else {
   movingrect.shapeColor = "green"
   fixedrect.shapeColor = "green"
 }
  drawSprites();
}