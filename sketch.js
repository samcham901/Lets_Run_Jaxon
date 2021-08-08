var Jaxon, Jaxon_running, edges;
var roadImg;
var road;
function preload(){
  //pre-load images
  
  roadImg = loadImage("path.png");
  Jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");
  
}
function setup(){
  createCanvas(200,600);
  //create sprites here
  
  road = createSprite(100,height/2,200,600);
  road.addImage(roadImg)
  
  road.VelocityY = 4
  road.scale = 1.2
  
  Jaxon = createSprite(100, 275, 50, 50);
  Jaxon.addAnimation("Running", Jaxon_running);
  Jaxon.scale = 0.07
  edges = createEdgeSprites();
}

function draw() {
  background(roadImg);

  if(road.y>400){
  road.y=height/2
  }

  Jaxon.x = mouseX
  Jaxon.y = mouseY
  Jaxon.collide(edges)
  drawSprites();
  
}
