
function preload() {
    bg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat= createSprite(800,600)
    cat.addAnimation("sleeping",cat1)
    cat.scale=0.2
    mouse= createSprite(200,700)
    mouse.addAnimation("standing",mouse1)
    mouse.scale=0.1
}

function draw() {

    background(bg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("sitting",cat4)
        cat.changeAnimation("sitting")
        mouse.addAnimation("looking",mouse4)
        mouse.changeAnimation("looking")
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("walking",cat2)
      cat.changeAnimation("walking")
      mouse.addAnimation("playing",mouse2)
      mouse.changeAnimation("playing")

  }
  


}
