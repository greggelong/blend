let gd;
let tp;
let sd;
let cnv;
let rcolumn =0
let rrow =0

function preload(){
  gd =loadImage("blends.png")
  tp = loadImage("top.png")
  sd = loadImage("sid.png")
  }

function setup() {
  cnv = createCanvas(800, 800);
  let cx = windowWidth/2-cnv.width/2
  let cy = windowHeight/2-cnv.height/2
  cnv.position(cx,cy)
  tp.resize(700,100)
  sd.resize(100,700)
  gd.resize(800,800)
  frameRate(1)

  
}

function draw(){
  background(255)
  image(tp,100,0)
  image(sd,0,100)
  let column = rcolumn;//floor(random(8))
  let row = rrow;// floor(random(8))
  // rect around the top
  noFill()
  stroke(255,0,0)
  strokeWeight(5)
  rect(100+(column*85),20,80,80)
  
  // rect around the bottom
  rect(10,100+(row*87),80,84)
  

  // the big picture
  let bigpic = gd.get(column*100,row*100,100,100)
  image(bigpic,200,200,500,500)

}


function touchStarted(){
  rcolumn=floor(random(8))
  rrow = floor(random(8))
  
}

function mouseClicked(){
  touchStarted()
}

 