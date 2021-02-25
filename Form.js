class Form{
    constructor(){
       this.input=createInput('Enter Your Name Here');
       this.button=createButton('PLAY');
       this.greeting=createElement('h4');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h2');
        title.html('Car Racing Game');
        title.position(displayWidth/2-50,0)
     
        this.input.position(displayWidth/2-100,displayHeight/2-100);
       
        this.button.position(displayWidth/2-50, displayHeight/2+50);
       
     this.button.mousePressed(()=>
          {
                this.input.hide();
               this.button.hide();
                 player.name=this.input.value();
                playercount = playercount+1;
                player.index=playercount;
                player.update();
                player.updateCount(playercount);
                this.greeting.html('HELLO '+ player.name);
                this.greeting.position(displayWidth/2-100,displayHeight/2-100);
            }
        )

        

    }
    
}