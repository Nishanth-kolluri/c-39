var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var trak,c1i,c2i,c3i,c4i,ground

var form, player, game;

var cars, car1, car2, car3, car4;
function preload(){
  trak = loadImage('images/track.png');
  c1i = loadImage('images/car1.png');
  c2i = loadImage('images/car2.png');
  c3i = loadImage('images/car3.png');
  c4i = loadImage('images/car4.png');
  ground = loadImage('images/ground.png');
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
  if(gamestate === 2){
    game.end();
  }
}
