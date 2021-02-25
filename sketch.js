var database;
var gamestate=0;
var playercount;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth-100,displayHeight-200);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();


    
}

function draw(){
    background("white");
    
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }

}

