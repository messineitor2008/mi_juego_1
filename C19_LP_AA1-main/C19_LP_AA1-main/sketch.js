var bc, backgroundImage
var nave, naveImage
var naveMala, naveMalaImage1,naveMalaImage2,naveMalaImage3,naveMalaImage4
var naveMalaGroup=[]
var rayos=[]
var rayo, rayoImage

function preload() {
backgroundImage=loadImage("espacio.jpg")
naveImage=loadImage("Nave1.png")
naveMalaImage1=loadImage("Nave Mala1.png")
naveMalaImage2=loadImage("Nave Mala2.png")
naveMalaImage3=loadImage("Mounstro.png")
naveMalaImage4=loadImage("Nave Mala4.png")
rayoImage=loadImage("Rayo3.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)
bc=createSprite(width/2,height/2,width,height)
bc.addImage(backgroundImage)
bc.scale=2.5

nave=createSprite(width/2,height/2+500)
nave.addImage(naveImage)
nave.scale=0.6

naveMalaGroup=new Group()
}


function draw(){
background("green");
if (keyDown(LEFT_ARROW)) {
 nave.x=nave.x-14
}

if (keyDown(RIGHT_ARROW)) {
    nave.x=nave.x+12 
   }

if (keyDown("space")) {
      rayos1 ();
   }

enemigos()
gameOver()
for (let index = 0; index < rayos.length; index++) {
colision(index)
}
drawSprites();
textSize(50)
fill("red")
text("Naves destruidas: ",width/2+700,height/2-650)
}

function enemigos(){
if (frameCount%60===0) {
  naveMala=createSprite(width/2,height/2-700)
  naveMala.x=Math.round(random(200,2000))
  naveMala.velocityY=5
  naveMala.debug=true

  var imagenes=Math.round(random(1,4))
  
  switch (imagenes) {
    case 1:naveMala.addImage(naveMalaImage3)
      break;
    case 2:naveMala.addImage(naveMalaImage2)
      break;
    case 3:naveMala.addImage(naveMalaImage1)
      break;
    case 4:naveMala.addImage(naveMalaImage4)
      break;
    default:
      break;
  }
  naveMala.scale=0.7
  naveMala.lifetime=280
  naveMalaGroup.push(naveMala)
}
}

function rayos1 (){
  rayo=createSprite(nave.x, nave.y)
  rayo.addImage(rayoImage)
  rayo.scale=0.2
  rayo.velocityY=-15
  rayos.push(rayo)
}

function colision(index){
  for (var i = 0; i < naveMalaGroup.length; i++){
    if (rayos[index]!== undefined && naveMalaGroup[i]!== undefined) {
    if (rayos[index].collide(naveMalaGroup[i]) ) {
      naveMalaGroup[i].remove(i);
      rayos[index].remove(index);
      delete rayos[index];
    }
    }
  }
}

function collision(){
var collision = collides(nave, naveMalaGroup[i]);
      if (collision.collided && !naveMalaGroup[i].isBroken) {
        isGameOver = true;
        gameOver();
      }
    }

function gameOver() {
  
  (
    {
      title: `¡Fin del juego!`,
      text: "¡Gracias por jugar!",
      imageUrl:
        "https://raw.githubusercontent.com/messineitor2008/Imagen/main/descarga__1_-removebg-preview%20(1).png",
      imageSize: "150x150",
      confirmButtonText: "Jugar de nuevo"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}
