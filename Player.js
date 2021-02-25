class Player{
    constructor(){
      this.index=null;
      this.name=null;
      this.distance=0;
    }
    getCount(){
        var playercountref = database.ref("playercount");
        playercountref.on('value', function(data){
        playercount=data.val();
        })
    }
    update(){
        var pIndex='players/player'+ this.index;
        database.ref(pIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
    static getPlayerInfo(){
        var inforef = database.ref("players");
        inforef.on('value', function(data){
          allPlayers=data.val();
    })
}
}