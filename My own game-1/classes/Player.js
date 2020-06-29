class Player{
  constructor(){
    
      this.index = null;
     
      this.distance = 0;
      
      this.name = null;
      this.rank = null;
    }
    
    getCount(){
     
      var playerCountRef = database.ref('playerCount');
      
      playerCountRef.on("value",(data)=>{
      
        playerCount = data.val();
      })
    }
    
    updateCount(count){
     
      database.ref('/').update({
      
        playerCount: count
      });
    }
    
    update(){
     
      var playerIndex = "players/player" + this.index;
      
      database.ref(playerIndex).set({
       
        name:this.name,
       
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
     
      var playerInfoRef = database.ref('players');
      
      playerInfoRef.on("value",(data)=>{
      
        allPlayers = data.val();
      })
    }
    GetCarsAtEnd(){
      database.ref('CarsAtEnd').on("value",(data)=>{
        this.rank=data.val();
      })
    }

    static updateCarsAtEnd(rank){
    database.ref('/').update({
    CarsAtEnd:rank
    })
    }
    movingOfThePlayer(){
      if(keyPressed(UP_ARROW)){
        players.position(players.x,players.y-30);
      }
      if(keyPressed(LEFT_ARROW)){
        players.position(players.x-5,players.y);
      }
      if(keyPressed(RIGHT_ARROW)){
        players.position(players.x+5,players.y);
      }
    }
}