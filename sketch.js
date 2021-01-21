
var database;
var gameState = 0;
var playerCount = 0;
var form ,player,game;

var distance =0 ;
var allPlayers;
var cars, car1,car2,car3,car4;

function setup(){
    createCanvas(displayWidth-600,displayHeight-500);

    console.log("displayHeight" + displayHeight);
    console.log("windowHeight" + windowHeight);

    database = firebase.database();

   game = new Game()
   game.getState()
   game.start()
   

    
    
}

function draw(){

   if (playerCount === 4 ){
       game.update(1);
       
   } 
   if(gameState ===1 ){
      
    clear();
    console.log("gamestate is 1")
    game.play();
   }

    
}



