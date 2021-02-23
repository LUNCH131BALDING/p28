var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1=createSprite(0,580,360,30)
    block1.shapeColor="blue"
    block2=createSprite(295,580,200,30)
    block2.shapeColor="red"
    block3=createSprite(515,580,200,30)
    block3.shapeColor="cyan"
    block4=createSprite(740,580,220,30)
    block4.shapeColor="orange"

    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="green"
    ball.velocityX=3
    ball.velocityY=3





    //create box sprite and give velocity

}

function draw() {
    background("pink");
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor="yellow"
    }
        if(block3.isTouching(ball)&&ball.bounceOff(block3)){
            ball.shapeColor="black"
        }            if(block4.isTouching(ball)&&ball.bounceOff(block4)){
                ball.shapeColor="brown"
    }
    if(block2.isTouching(ball)){
        ball.shapeColor="white"
ball.velocityX=0
ball.velocityY=0
    }    
drawSprites();
}    //add condition to check if box touching surface and make it box
