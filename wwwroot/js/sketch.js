
///////////////////////////////
// ---- P5 FUNCTIONALITY --- //
///////////////////////////////

// Globals
const c_squareSide = 160;
const c_pathHeight = 40;

let playerPieces = [];
let playerOnePieces = []; // To be used later
let playerTwoPieces = []; // To be used later

// Color when mouse is over a piece
const hoverColor = new RGBColor(50, 50, 220, 100);

let b = new XBoard();

function renderSquare(pos, side){
  rect(pos.x * side, pos.y * side, side, side);
}

function squareRenderer(square){
  //fill(200);
  push();

  // We translate to the center of the current square
  translate(square.pos.x * c_squareSide + c_squareSide/2, square.pos.y * c_squareSide + c_squareSide/2);

  noStroke();
  //rotate(-PI);
  fill(150);
  if(square._angle >= 0){
   
      let x = -int(c_squareSide/2);
      let y = -c_pathHeight/2;

      rotate(radians(square._angle));
      rect(x,y, c_squareSide/2+c_pathHeight/2, c_pathHeight);

      rotate(-PI/2);
      rect(x,y, c_squareSide/2, c_pathHeight);
      rotate(PI/2);

      rotate(-radians(square._angle));
  }
  else {
    rect(-c_squareSide/2, -c_pathHeight/2, c_squareSide, c_pathHeight);
  }

  stroke(50);
  strokeWeight(2);
  noFill();
  //renderSquare(square.pos, c_squareSide);
  rectMode(CENTER);
  rect(0,0, c_squareSide, c_squareSide);

  if(square.player > 0) {
    if(square.player == 1)
      fill(225);
    else
      fill(50);

    ellipse(0,0, 100,100);
  }

  noStroke();
  if(square.isMouseOver && square.player > 0) {
    //fill(255,0,0);

    strokeWeight(5);
    stroke(hoverColor.R, hoverColor.G, hoverColor.B);
    //hoverColor.setFill();
    noFill();
    //rect(0,0, c_squareSide, c_squareSide);
    ellipse(0,0, 100,100);
  }

  rectMode(CORNER);

  pop();
}

// SETUP: Run ONCE
function setup() {
  var canvas = createCanvas(b._width*c_squareSide, b._height*c_squareSide);
  canvas.parent('sketch-holder');
  
  for(let i = 0; i < 30; i++){
    let player = -1;
    if(i < 10) {
      player = 2;
      if(i % 2 == 0)
        player = 1;
    }
   
    let y = int(i / b._width);
    let x = int(i % b._width);

    if(i > b._width - 1 && i <= b._width * 2 - 1){
      x = b._width - x - 1; // Invert the order for the second row
    }

    let a = getAngle(i);
    let s = new XSquare(new XPosition(x,y), player, squareRenderer, a);

    b.addSquare(s);
  }
}

function getAngle(i){
  if(i === 9)
    return 0; // "LEFT_DOWN";
  if(i === 10)
    return  90; // "UP_LEFT"
  if(i === 19)
    return 270;// "RIGHT_DOWN";
  if(i === 20)
    return 180;// "TOP_RIGHT";

  return -1;
}

// DRAW: Run EVERY FRAME UPDATE
function draw() {

  background(175);
  var pos = new XPosition(int(mouseX/c_squareSide), int(mouseY/c_squareSide)); // Scale down mouse position

  if(b.selectSquare(pos))
    cursor(HAND);
  else
    cursor(ARROW);

  b.render();  
}

function playerColor(i) {
  let color = playerOneColor;
  if (i % 2 != 0)
    color = playerTwoColor;

  return color;
}


function handlePieces() {
  var isMouseOver = false;

  playerPieces.forEach(element => {
    var currentMouseOver = element.mouseOver(mouseX, mouseY);

    if(currentMouseOver)
      isMouseOver = true;

    element.render();
  });

  if(isMouseOver)
    cursor(HAND);
  else
    cursor(ARROW);
}