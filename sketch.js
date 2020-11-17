var box1,box2, box3,box4;
function setup() {
  
  createCanvas(800,400);
 box1 = createSprite(0, 200,67,99);
 box1.velocityX = 3;
 box2 = createSprite(400,200,50,50)
 box2.velocityX = -3;

 box3 = createSprite(600, 0,67,99);
 box3.velocityY = 3;
 box4 = createSprite(600,400,50,50)
 box4.velocityY = -3;
 box1.shapeColor="green"
 box2.shapeColor="blue";
 box1.debug=true;
 box2.debug=true;
 box3.shapeColor="green"
 box4.shapeColor="blue";
 box3.debug=true;
 box4.debug=true;
}

function draw() {
  background(0);
  
  //function with parameters
  /*if(isTouching(box1, box3)){
    box1.shapeColor="red";
    box3.shapeColor="red";
  }
  else{
    box1.shapeColor="green"
    box3.shapeColor="green";
  }*/
  bounceOff(box1,box2);
  bounceOff(box3, box4)
 

  drawSprites();
}
function bounceOff(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
    &&obj2.x-obj1.x<obj1.width/2+box2.width/2){
      console.log("xxx");
      obj1.velocityX = obj1.velocityX *-1;
      obj2.velocityX = obj2.velocityX *-1
    }
   if(obj1.y-obj2.y<obj1.height/2+obj2.height/2
    && obj2.y-obj1.y<obj1.height/2+obj2.height/2){
      console.log("here");
      obj1.velocityY = obj1.velocityY *-1;
      obj2.velocityY = obj2.velocityY *-1
    }
    
}