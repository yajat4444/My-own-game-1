class Form{

    constructor(){
    this.input=createInput("write the name");
    this.button = createButton('Start');
    this.greeting=createElement('h3');
    this.title=createElement('h2');
    }
    dislay(){
    this.input.position(displayWidth/2,displayHeight/2.5,60,20);
    this.button.position(displayWidth/2,displayHeight/2,40,40) ;
    this.button.mousePressed(()=>{
        
         this.input.hide();
         
         this.button.hide();
         
         player.name = this.input.value();
         
         playerCount+=1;
         
         player.index = playerCount;
        
         player.update();
         
         player.updateCount(playerCount);
         
         this.greeting.html("Hello " + this.input);
         
         this.greeting.position(displayWidth/3, displayHeight/3);
         this.title.position(displayWidth/2-50,0);
       })
    }
    }
    