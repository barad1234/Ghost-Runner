var towerImage,tower,doorImage,door,doorsGroup,
    climberImage,climber,clcimberGroup,ghostImage,ghost;

var invisibleBlockGroup,invisibleBlock;


function preload()
{
  towerImage = loadImage("tower.png");
  doorImage =  loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-standing.png");
  climberGroup = new Group();
  doorsGroup = new Group();
}

function setup()
{
  createCanvas(600,600);
  
  
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY = 1;
  
  
  
  doorsGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(300,300,50,50);
  ghost.addImage("ghost",ghostImage);
  ghost.scale = 0.5;
}

function draw()
{
  background(0);
  
if(tower.y > 400)
{
  tower.y = 300; 
}
  
  if(keyDown("left_Arrow"))
  {
    ghost.x = ghost.x-2
  }
  
  if(keyDown("right_Arrow"))
  {
    ghost.x = ghost.x+2
  }
  
  if(keyDown("space"))
  {
    ghost.velocityY = -2
  }
  
  ghost.velocityY = ghost.velocityY +0.8;
  
  if(climberGroup.isTouching(ghost))
  {
    ghost.velocityY = 0;
  }
  
  
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600)
  {
    ghost.destroy();
  }
  
    
  spawnDoors();
  
  
  drawSprites();
  
}


function spawnDoors()
{
  if(frameCount%350 === 0)
  {
    var door = createSprite(200,-50);
    door.addImage("door",doorImage);
    
    var climber = createSprite(200,10);
    climber.addImage("climber",climberImage);
    
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width
    invisibleBlock.height = 2;
    
    door.x = Math.round(random(120,400));
    
    door.velocityY = 1;
    climber.x = door.x;
    climber.velocityY = 1;
    
    invisibleBlock.velocityY = 1;
    
    invisibleBlock.x = door.x;
    
    
    
    
    
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    
    climberGroup.add(climber)
    doorsGroup.add(door);
    
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
    
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
  }
    
    
}