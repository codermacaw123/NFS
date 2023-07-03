var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1,car2,car1Img,car2Img,track;
var cars=[]
var allPlayers;
var coins,fuels,obstacles
var powerCoinImage, fuelImage;
var tyreImg, coneImg;
var lifeImage,fuelImage,blastImage
var stopSound;


function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1Img=loadImage("assets/f1.png");
  car2Img=loadImage("assets/f2.png");
  track=loadImage("assets/track.jpg")
  
  powerCoinImage=loadImage("assets/goldCoin.png");
  fuelImage = loadImage("assets/fuel.png")
  obstacle2Image = loadImage("assets/Tyre.png")
  obstacle1Image = loadImage("assets/traffic_cone.png")
  lifeImage= loadImage("assets/life.png");
  fuelImage= loadImage("assets/fuel.png")
  blastImage = loadImage("assets/blast.png")
  stopSound = loadSound("assets/Hehe.wav")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.updateState(1)
  }
  
  if(gameState==1){
    game.play()
  }

  if(gameState==2){
    game.showLeaderBoard();
    game.end()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
