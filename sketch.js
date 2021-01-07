var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");


  // rank1=loadImage("images/rank1.jpg");
  // rank2=loadImage("images/rank2.png");
  // rank3=loadImage("images/rank3.png");
  // rank4=loadImage("images/rank4.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

    // if (player.rank==1){
    //   image(rank1,displayWidth/2-200,-displayHeight*4-100,400,400);
    // }
    // if (player.rank==2){
    //   image(rank2,displayWidth/2-200,-displayHeight*4-100,400,400);
    // }
    // if (player.rank==3){
    //   image(rank3,displayWidth/2-200,-displayHeight*4-100,400,400);
    // }
    // if (player.rank==4){
    //   image(rank4,displayWidth/2-200,-displayHeight*4-100,400,400);
    // }
  
}


