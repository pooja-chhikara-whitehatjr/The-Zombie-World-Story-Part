var NewYorkImg;
var HouseImage;
var House2Image;
var officeImg;
var peopleImg;
var ZombieAttackImg;
var GoalImg;
var InstrucImg;
var gameState= "Story";

var NewYork;
var House;
var House2;
var Office;
var People;
var ZombieAttack;
var Goal;
var Instruction;

function preload(){

NewYorkImg=loadImage("New York.jpg");
HouseImage=loadImage("House.jpg");
House2Image=loadImage("House2.jpg");
GoalImg=loadImage("Goal.jpg");
officeImg=loadImage("Office.jpg");
peopleImg=loadImage("People.png")
ZombieAttackImg=loadImage("Zombie Attack.jpg");
InstrucImg=loadImage("instruc.jpg");



}


function setup() {

  createCanvas(windowWidth,windowHeight);

  NewYork=createSprite(width/2,height/2,width,height);
  NewYork.scale=1.25
  House=createSprite(width/2,height/2,width,height);

  House2=createSprite(width/2,height/2,1300,700);
  House2.scale=1.6
  Office=createSprite(width/2,height/2,width,height);
  People=createSprite(width/2,height/2,2000,700);
  People.scale=1.55
  ZombieAttack=createSprite(windowWidth/2,windowHeight/2,2300,700);
  ZombieAttack.scale=0.63
  Goal=createSprite(width/2,height/2,width,height);
  Instruction=createSprite(width/2,height/2,width,height);
  Instruction.scale=1.55;

  NewYork.addImage(NewYorkImg);
  House.addImage(HouseImage);
  House2.addImage(House2Image);
  Office.addImage(officeImg);
  People.addImage(peopleImg);
  ZombieAttack.addImage(ZombieAttackImg);
  Goal.addImage(GoalImg);
  Instruction.addImage(InstrucImg);
 NewYork.visible= false;
 House.visible= false;
 House2.visible= false;
 Office.visible= false;
 People.visible= false;
 ZombieAttack.visible= false;
 Goal.visible= false;
 Instruction.visible= false;

}

function draw() {
  background('black')
  
  if(gameState==="Story"){
    
    if(frameCount<50){
     NewYork.visible=true;
    NewYork.lifetime=100;
    }
     if(frameCount>150 && frameCount<250){
       Office.visible=true;
       Office.lifetime=100;
   }
    if(frameCount>350 && frameCount<500){
     ZombieAttack.visible=true;
     ZombieAttack.lifetime=100;
    }
    if(frameCount>600 && frameCount<750){
      People.visible=true;
      People.lifetime=100;
    }
   if(frameCount>850 && frameCount<970){
     House.visible=true;
     House.lifetime=100;
   }
   if(frameCount>1070 && frameCount<1250){
     House2.visible=true;
      House2.lifetime=100;
    }
    if(frameCount>1350 && frameCount<1450){
      Goal.visible=true;
      Goal.lifetime=100;
    }
    
    if(frameCount>1550 && frameCount<1650){
      Instruction.visible=true;
      Instruction.lifetime=100;
    }
  }

  drawSprites();
}
