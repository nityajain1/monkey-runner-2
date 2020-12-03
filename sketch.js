
  var monkey , monkeyrunning;
  var banana ,bananaImage, obstacle, obstacleImage;
  var bananaGroup, obstacleGroup;
  var score;
  var bgimage;

 

function preload(){
  
  
  monkeyrunning = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgimage = loadImage("bg.png");
  
}



function setup() {
  createCanvas(400,400);
  
  //monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkeyrunning);
  monkey.scale = 0.1;

  //ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = true;
  ground.shapeColor = "green";
  
  let  bananaGroup = createGroup();
  let obstacleGroup = createGroup();
 
}


function draw() {
  background(bgimage);
  
  
  monkey.collide(ground);
  
  //creating endless ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  //jumping monkey
  if(keyDown("space") && monkey.y >= 314){
    monkey.velocityY = -14;
    console.log(monkey.y);
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  bananaGroup();
  obstacleGroup();
  if(obstacleGroup.isTouching(monkey)){
    end();
  }
  
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("white");
  textSize(20);
  fill("yellow");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50); 

  camera.position.x = monkey.x;
  camera.position.y = monkey.y;
  
         
  
 
  drawSprites();
}

function bananaGroup() {
  
    if(frameCount % 80 === 0){
    banana =createSprite(400,Math.round(random(150,200)),20,20);
    banana.addImage("bananaI",bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-4;
    banana.lifetime = 100;
    
    }
  }

function obstacleGroup(){
  
  if(frameCount % 300 === 0){
    obstacle =createSprite(400,330,20,20);
    obstacle.addImage("obstacleI",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime = 100;
  }
}
function end(){
   obstacleGroup.destroy();
   bananaGroup.destroy();
   monkey.destroy();
   text("game ended",10,10,10);
}


