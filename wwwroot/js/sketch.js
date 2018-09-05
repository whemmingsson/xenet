
///////////////////////////////
// ---- P5 FUNCTIONALITY --- //
///////////////////////////////

// Globals
const c_squareSide = 150;

let playerPieces = [];
let playerOnePieces = []; // To be used later
let playerTwoPieces = []; // To be used later

const playerOneColor = new RGBColor(220,220,220);
const playerTwoColor = new RGBColor(25,25,25);

// Color when mouse is over a piece
const hoverColor = new RGBColor(50,50,220);

let b = new XBoard();

function renderSquare(pos, side){
  rect(pos.x * side, pos.y * side, side, side);
}

function squareRenderer(square){
  stroke(50);
  strokeWeight(2);
  fill(200);

  if(square.isMouseOver)
    hoverColor.setFill();

  renderSquare(square.pos, c_squareSide);
}

// SETUP: Run ONCE
function setup() {
  var canvas = createCanvas(b._width*c_squareSide, b._height*c_squareSide);
  canvas.parent('sketch-holder');
  
  for(let i = 0; i < b._numberOfSquares; i++){
      let y = int(i / b._width);
      let x = int(i % b._width);
      // if(i > b._width - 1 && i <= b._width * 2 - 1){
      //    x = b._width - x - 1; // Invert the order for the second row
      // }
      let s = new XSquare(new XPosition(x,y), squareRenderer);
      b.addSquare(s);
  }
}



// DRAW: Run EVERY FRAME UPDATE
function draw() {
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