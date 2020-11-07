
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600, 300);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  
  ground = createSprite(300,250,1200,10);
  ground.velocityX=-7;
  
  monkey = createSprite(100,220);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.debug= false;
  monkey.setCollider("circle",0,0,290);
  
}


function draw() {
  background("lightblue");
  
  textSize(20);
  fill("yellow");
  score = score + Math.round(getFrameRate()/60);
  text("Survival Time:"+score,250,30);
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    score = 0;
  }

  
   if(keyDown("space")&& monkey.y >= 210){
     monkey.velocityY = -15;
   }
    monkey.velocityY = monkey.velocityY + 1;
    monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

  
  drawSprites();
  food();
  obstacles();
}
function food(){
  if(frameCount %80 === 0){
  banana = createSprite(610,150);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX=-5;
  banana.y = Math.round(random(150,90));
  banana.lifetime = 150;
    
  FoodGroup.add(banana);

  }
}
function obstacles(){
  if(frameCount %130 === 0){
  obstacle = createSprite(610,230);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX=-5;
  obstacle.lifetime = 150;

  obstacleGroup.add(obstacle);
  }
}





