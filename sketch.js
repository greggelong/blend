let gd;
let tp;
let sd;
let cnv;
let rcolumn =0
let rrow =0
let lasttouch= 0;
let binHex =[]

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
  for (let i =0; i<64;i++){
    binHex.push(binConvert(i,6))

  }

  
}

function draw(){
  background(255)
  image(tp,100,0)
  image(sd,0,100)
  let column = rcolumn;//floor(random(8))
  let row = rrow;// floor(random(8))
  // rect around the top
  let num = (column+1)*(row+1)
  noFill()
  stroke(255,0,0)
  strokeWeight(5)
  rect(100+(column*85),20,80,80)
  
  // rect around the bottom
  rect(10,100+(row*87),80,84)
  

  // the big picture
  let bigpic = gd.get(column*100,row*100,100,100)
  image(bigpic,200,200,500,500)

  // hexagram shadow
  showGram(binHex[num-1])


}


function touchStarted(){
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
  rcolumn=floor(random(8))
  rrow = floor(random(8))
  }

  lasttouch = currenttime;
  
}

function mouseClicked(){
  touchStarted()
}


function binConvert(a, bitLen) {
  // takes in a decimal and a bit length and returns a list of ones and zeros binary for that number

  let b = a.toString(2); // converts it to binary but leading zeros, not 8 bits eg. 3 = "11"
  let mask = "0".repeat(bitLen); // a mask to get the extra zeros
  let c = mask.slice(0, bitLen - b.length); // slice to get the right number of zeros
  // eg. if b = "11" then c = "000000"
  let binstring = c + b; // binary string so 3 will give 00000011 8 bits

  let binArray = int(binstring.split("")); // is an aray of ints so [0,0,0,0,0,0,1,1]
  return binArray;
}

function showGram(narray){
  fill(255,0,0,80)
  stroke(255)
  let y = 170;
  for (let i =0; i<narray.length; i++){
    if (narray[i]===0){
      rect(180,y,200,50);
      rect(530,y,200,50);
    }else{
      rect(180,y,550,50)
    }
    y+=100
  }
}
 
 
