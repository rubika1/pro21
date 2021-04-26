var bullet,wall,thickness
var speed,weight


function setup() {
  createCanvas(1600,400);
  

  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  bullet.velocityX=speed
}

function draw() {
  background(black);  
  if(wall.X-bullet.X<(bullet.width+wall.width)/2){
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/22500

    if(deformation>180){
      bullet.shapeColour="white"
    }

    if(deformation<180 && deformation>100){
      bullet.shapeColour="white"
    }

    if(deformation<100 ){
      bullet.shapeColour="white"
    }
  }
  if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (damage>10)
      {
        wall.shapeColour="red";
      }
      if(damage<10)
      {
        wall.shapeColour="green";
      }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
}