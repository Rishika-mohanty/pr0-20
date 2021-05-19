var bgImg, tomImg1,tomImg2, jerryImg1, jerryImg2;
var tom,jerry;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    jerryImg1 = loadAnimation("images/mouse4.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(800,400);
    //create tom and jerry sprites here
   tom = createSprite(600,320,70,50);
   tom.addAnimation("FVVv",tomImg1);
   tom.scale = 0.12;

   jerry = createSprite(195,330,40,40);
   jerry.addAnimation("CRvfvv",jerryImg1);
   jerry.scale = 0.06;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("FBG",tomImg1);
        tom.changeAnimation("FBG")
        jerry.addAnimation("FBG",jerryImg1);
        jerry.changeAnimation("FBG")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("dryftf",jerryImg2);
    jerry.changeAnimation("dryftf")
   jerry.frameDelay = 15;
   tom.addAnimation("rpm",tomImg2)
   tom.changeAnimation("rpm");
   tom.velocityX = -3;
   }
   

}
