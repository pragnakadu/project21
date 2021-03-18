var b1,b2,b3,b4
var wall,thickW
var speed,weight,thickW

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)

  b1=createSprite(200, 350, 80, 20);
  b1.shapeColor="white"
  b1.velocityX=4
  b2=createSprite(200,250,80,20);
  b2.shapeColor="white"
  b2.velocityX=4
  b3=createSprite(200,150,80,20);
  b3.shapeColor="white"
  b3.velocityX=2.5
  b4=createSprite(200,50,80,20);
  b4.shapeColor="white"
  b4.velocityX=3

  
  thickW = random(22,83)
  wall=createSprite(1200,200,thickW,canvas.height/2)
  wall.shapeColor="blue"
  

 // var deformation=0.5 * weight *speed/22509

}

function draw() {
  background("pink"); 
  
  

  var Damage =0.5 * weight *speed/thickW

  if(hasCollided(b1,wall)){
      
      b1.velocityX=0
      var Damage =0.5 * weight *speed/thickW 
       
        if(Damage>10){
          wall.shapeColor = color(255,0,0)
         }

        if(Damage < 10 ){
          wall.shapeColor=color(0,255,0)
        }
        

        }

        
        if(b2.x-wall.x<=wall.width/2+b2.width/2 &&
          wall.x-b2.x<=wall.width/2+b2.width/2 &&
               wall.y-b2.y<=wall.height/2+b2.height/2 &&
               b2.y-wall.y<=wall.height/2+b2.height/2){
          
                 b2.velocityX=0
          
                  // deformation=0.5 * weight *speed/22509
                  if(Damage>180){
                    b2.shapeColor="red"
                  }
                 if(Damage<180 && Damage>100){
                    b2.shapeColor="yellow"
                 }
                 if(Damage <100){
                    b2.shapeColor="green"
                  }
          
                 }
          //fegg
                   if(b3.x-wall.x<=wall.width/2+b3.width/2 &&
                    wall.x-b3.x<=wall.width/2+b3.width/2 &&
                    wall.y-b3.y<=wall.height/2+b3.height/2 &&
                    b3.y-wall.y<=wall.height/2+b3.height/2){
              
                      b3.velocityX=0
              
                       
                       //deformation=0.5 * weight *speed/22509
                      if(Damage>180){
                        b3.shapeColor="red"
                      }
                     if(Damage<180 && Damage>100){
                        b3.shapeColor="yellow"
                      }
                     if(Damage<100){
                        b3.shapeColor="green"
                      }
              
                      }
          
          
                      if(b4.x-wall.x<=wall.width/2+b4.width/2 &&
                        wall.x-b4.x<=wall.width/2+b4.width/2 &&
                       wall.y-b4.y<=wall.height/2+b4.height/2 &&
                        b4.y-wall.y<=wall.height/2+b4.height/2){
                  
                          b4.velocityX=0
                  
                          Damage=0.5 * weight *speed/22509
                          if(Damage>180){
                            b4.shapeColor="red"
                          }
                          if(Damage<180 && Damage>100){
                            b4.shapeColor="yellow"
                          }
                          if(Damage <100){
                            b4.shapeColor="green"
                          }
                        }

  
        
                  
  drawSprites();
      }
