
///////////////////////////////
// ---- P5 FUNCTIONALITY --- //
///////////////////////////////

// Globals
const c_width = 2000;
const c_height = 600;
const c_squaresInRow = 10;
const c_pieceRadius = 75;

let playerPieces = [];
let playerOnePieces = []; // To be used later
let playerTwoPieces = []; // To be used later

const playerOneColor = new RGBColor(225,25,25);
const playerTwoColor = new RGBColor(25,25,225);

// SETUP: Run ONCE
function setup() {
  createCanvas(2000, 600);
  createPieces();
}

// DRAW: Run EVERY FRAME
function draw() {
  background(100);
  drawGrid();
  drawPieces();
}

function createPieces() {    
   var squareSide = parseInt(c_width/c_squaresInRow);
   let y = squareSide/2; // 200 / 2 = 100

    // We create a total of 10 pieces; 5 for each player.
    // We place them in the center of the game grid squares
    for(let i = 0; i < c_squaresInRow; i++) {     
        let color = playerColor(i);    
        let x = i*squareSide+squareSide/2;

        var piece = new Piece(x,y, color);
        playerPieces.push(piece);
    }
}

function playerColor(i) {
  let color = playerOneColor;
  if (i % 2 != 0)
    color = playerTwoColor;

  return color;
}

function drawGrid(){
  stroke(200);
  strokeWeight(2); 

  // Draw vertical lines
  var squareSide = parseInt( c_width/c_squaresInRow);
  for(let i = 0; i < c_width; i+=squareSide){
    line(i, 0, i, c_height);
  }

  //Draw horizontal lines
  for(let i = 0; i < c_height; i+=squareSide){
    line(0, i, c_width, i);
  }
}

function drawPieces() {
  playerPieces.forEach(element => {
      element.render();
  });
}