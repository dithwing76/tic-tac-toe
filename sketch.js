var turn, winner,checker
var start=0,playing=1,gamestate=start
var tile1,tile2,tile3,tile4,tile5,tile6,tile7,tile8,tile9,tilegroup
var playbutton,btn1,btn2,resetbutton,infobutton
var player1 ="green",player2="red"
var rand,info=false
function preload(){

}
function setup(){
  createCanvas(500,500)
  list =[0,0,0,0,0,0,0,0,0,0]
  strokeWeight(0);
  tilegroup=createGroup()
  tile1 = createSprite(220,150,20,20)
  tilegroup.add(tile1)
  tile2 = createSprite(250,150,20,20)
  tilegroup.add(tile2)
  tile3 = createSprite(280,150,20,20)
  tilegroup.add(tile3)
  tile4 = createSprite(220,180,20,20)
  tilegroup.add(tile4)
  tile5 = createSprite(250,180,20,20)
  tilegroup.add(tile5)
  tile6 = createSprite(280,180,20,20)
  tilegroup.add(tile6)
  tile7 = createSprite(220,210,20,20)
  tilegroup.add(tile7)
  tile8 = createSprite(250,210,20,20)
  tilegroup.add(tile8)
  tile9 = createSprite(280,210,20,20)
  tilegroup.add(tile9)
  turn = 1
  winner=0
  checker=0
  playbutton=createSprite(250,300,50,25)
  playbutton.shapeColor="black"
  btn1=createSprite(50,100,50,25)
  btn2=createSprite(450,100,50,25)
  resetbutton=createSprite(250,350,50,25)
  resetbutton.shapeColor="black"
  resetbutton.visible=false
  infobutton=createSprite(250,150,25,25)
  infobutton.shapeColor="lightBlue"
}
function draw(){
  background("white")
  
  if(gamestate===playing){
    strokeWeight(0)
    textSize(50)
    if(mouseIsOver(resetbutton)){
      highlight(resetbutton,resetbutton.width+5,resetbutton.height+5)
      if(mouseWentDown("leftButton")){
      resetbutton.visible=false
      playbutton.visible=true
      btn1.visible=true
      btn2.visible=true
      infobutton.visible=true
      gamestate=start
      list =[0,0,0,0,0,0,0,0,0,0]
    }}
  if(winner==0){
    tilegroup.setVisibleEach(true)
    check(tile1,1)
    check(tile2,2)
    check(tile3,3)
    check(tile4,4)
    check(tile5,5)
    check(tile6,6)
    check(tile7,7)
    check(tile8,8)
    check(tile9,9)
    
    if(turn==1){
      fill(player1)
    
      text(player1+" turn",200,100)
    
    }else if(turn==2){
      fill(player2)
      text(player2 +" turn",200,100)
    }
  }else if(winner==1){
    fill(player1)
    text(player1+" won",200,100)
  }else if(winner==2){
    fill(player2)
    text(player2+" won",200,100)
  }else if(winner==-1){
    fill("yellow")
    text("TIE",200,100)
  }
  
  whowins(1)
  whowins(2)
  if(winner==0){
    tiemaker()
  }}
  if(gamestate===start){
    if(mouseIsOver(infobutton)){
      info=true
    }else{
      info=false
    }
    btn1.shapeColor=player1
    btn2.shapeColor=player2
    tilegroup.setVisibleEach(false)
    if(mouseIsOver(playbutton)){
      highlight(playbutton,playbutton.width+5,playbutton.height+5)
      if(mouseWentDown("leftButton")){
      playbutton.visible=false
      btn1.visible=false
      btn2.visible=false
      infobutton.visible=false
      resetbutton.visible=true
      gamestate=playing
      list =[0,0,0,0,0,0,0,0,0,0]
      turn = 1
      winner=0
    }}
    buttonscan(btn1)
    buttonscan(btn2)
  }
  fill("black")
  //text("mouseX: "+World.mouseX,15,15)
  //text("mouseY: "+World.mouseY,15,30)
  drawSprites()
  if(gamestate===start){
    
    fill("white")
    textSize(12)
    text("player1",30,103)
    text("player2",431,103)
    textSize(20)
    text("play",232,305) 
    text("i",247,156) 
    textSize(50)
    fill("black")
    text("Tik Tack Toe",150,50)
    textSize(15)
    if(info==true){
    text("Player1 goes first",190,90)
    text("Click your colour to change it",190,105)
    text("When your ready, press play",190,120)
    }
  }else{
    fill("white")
    textSize(20)
    text("reset",228,356)
  }
  
}
function buttonscan(name){
  if(mouseIsOver(name)){
    highlight(name,name.width+5,name.height+5)
    if(mouseWentDown("leftButton")){
      rand=Math.round(random(1,5))
    
      if(rand==1){
        if(name==btn1){
          player1="green"
        }
        if(name==btn2){
          player2="green"
        }
      }
      if(rand==2){
        if(name==btn1){
          player1="red"
        }
        if(name==btn2){
          player2="red"
        }
      }
      if(rand==3){
        if(name==btn1){
          player1="brown"
        }
        if(name==btn2){
          player2="brown"
        }
      }
      if(rand==4){
        if(name==btn1){
          player1="pink"
        }
        if(name==btn2){
          player2="pink"
        }
      }
      if(rand==5){
        if(name==btn1){
          player1="blue"
        }
        if(name==btn2){
          player2="blue"
        }
      }
    
  }}
}







function tiemaker(){
  checker=0
  for(var i =1;i<10;i+=1){
    if(!list[i]==0){
    checker+=1
    }
  }
  if(checker==9){
    winner=-1
  }
}
function whowins(name){
  //downwards
  for(var i =0;i<3;i+=1){
    if(list[i]==name&&list[i+3]==name&&list[i+6]==name){
      winner =name
    }
  }
  //across
  for(var i =1;i<9;i+=3){
    if(list[i]==name&&list[i+1]==name&&list[i+2]==name){
      winner =name
    }
  }
  //diaganal
  if(list[1]==name&&list[5]==name&&list[9]==name){
    winner =name
  }
  if(list[3]==name&&list[5]==name&&list[7]==name){
    winner =name
  }
}
function check(name,tile){
  name.visible=true
  fill("black")
  if(list[tile]==0){
  if(mouseIsOver(name)){
    //name.shapeColor="yellow"
    highlight(name,name.width+5,name.height+5)
    //stroke("yellow")
    //strokeWeight(5)
    if(mouseWentDown("leftButton")){
      
      
      if(turn==1){
        turn=2
        name.shapeColor=player1
        list[tile]=1
      }else if(turn==2){
        turn=1
        list[tile]=2
        name.shapeColor=player2
      }
    }
  }else{
    name.shapeColor="black"
  }}
}
function highlight(name,width,height){
  fill("yellow")
  rect(name.x-width/2,name.y-height/2,width,height)
}