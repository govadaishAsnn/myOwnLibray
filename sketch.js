var movingRect,fixedRect;
var object



function setup() {
  createCanvas(1000,1000);
  movingRect = createSprite(200,350,100,150);
  fixedRect= createSprite(300,100,100,50);
  object= createSprite(300,250,100,50);


}






  


function draw() {
  background("blue");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 if(isTouching(movingRect,object)===true){
    movingRect.shapeColor="lightgreen";  
    object.shapeColor="lightblue";
 }
 else{
  movingRect.shapeColor="red";  
  object.shapeColor="orange";
 }
  


  drawSprites();
}

