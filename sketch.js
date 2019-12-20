var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background;
var plasticPack,bottles,usedPaper;
var foodWaste,carton,eggShells;
var dryWasteBin,wetWasteBin;
var smog,dust;
var score = 0;
var factBox;

function preload(){
    bottlesImg = loadImage("crushedBottle.png");
    //dryWasteBinImg = loadImage("blueBin1.png");
    backgroundImg = loadImage("niceCity.png");
    foodWasteImg = loadImage("food waste1.png");
    plasticPackImg = loadImage("chips.png");
    cartonImg = loadImage("carton.png");
    eggShellsImg = loadImage("eggShells.png");
    usedPaperImg = loadImage("usedPaper.png");
    wetWasteBinImg = loadImage("greenBin1.png");

}
function setup(){
    createCanvas(800,400);
    background = createSprite(400,200,800,400);
    background.addImage(backgroundImg);
    background.scale = 0.8;

    //dryWasteBin = createSprite(250,320,80,90);
    //dryWasteBin.addImage(dryWasteBinImg);
   //  dryWasteBin.scale = 0.7;
   
    foodWaste = createSprite(520,350,20,30);
    foodWaste.addImage(foodWasteImg);
    foodWaste.scale = 0.2;

    plasticPack = createSprite(720,390,20,30);
    plasticPack.addImage(plasticPackImg);
    plasticPack.scale = 0.2;
   
    bottles = createSprite(678,300,10,30);
    bottles.addImage(bottlesImg);
    bottles.scale = 0.1;

    carton = createSprite(25,310,10,20);
    carton.addImage(cartonImg);
    carton.scale = 0.3;

    eggShells = createSprite(620,380,20,10);
    eggShells.addImage(eggShellsImg);
    eggShells.scale = 0.2;

    usedPaper = createSprite(600,320,10,10);
    usedPaper.addImage(usedPaperImg);
    usedPaper.scale = 0.1;

    wetWasteBin = createSprite(350,320,80,90);
    wetWasteBin.addImage(wetWasteBinImg);
    wetWasteBin.scale = 0.6;
    wetWasteBin.setCollider("circle",0,0,50);


}

function draw(){

    if(gameState === PLAY){
        if(keyDown("LEFT_ARROW") ){
            wetWasteBin.velocityX = -2;
        }
        if(keyDown("RIGHT_ARROW") ){
            wetWasteBin.velocityX = 2;
        }

        if(bottles.isTouching(wetWasteBin) ){
           bottles.destroy();
        }
    
        //if(mousePressedOver(wetWasteBin)){
          //  dryWasteBin.x = World.mouseX;
            //dryWasteBin.y = World.mouseY;
           //}
    
           if(plasticPack.isTouching(wetWasteBin)) {
           plasticPack.destroy();
          }
          if(foodWaste.isTouching(wetWasteBin) ){
            foodWaste.destroy();
            }
    
         // if(eggShells.isTouching(wetWasteBin) ){
           // eggShells.destroy();
        //}
        if(carton.isTouching(wetWasteBin) ){
           carton.destroy();
         }
        // if(usedPaper.isTouching(wetWasteBin)){
          //   usedPaper.destroy();
         //}
    }

    console.log();
    
    drawSprites();
}