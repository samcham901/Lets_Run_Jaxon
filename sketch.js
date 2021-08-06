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
  Jaxon = createSprite(100, 275, 50, 50);
  Jaxon.addAnimation("Running", Jaxon_running);
  Jaxon.scale = 3
  edges = createEdgeSprites();

  road = createSprite(100, 300, 200, 600);
  road.addImage(roadImg)
  road.VelocityY = 3
  
}

function draw() {
  background(roadImg);
  if(road.y<0){
  road.y=canvas.height/2
  }
  Jaxon.x = mouseX
  Jaxon.y = mouseY
  Jaxon.collide(edges)
  drawSprites();
  
}
