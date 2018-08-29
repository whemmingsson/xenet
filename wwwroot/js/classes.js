/////////////////////
// ---- Color ---- //
/////////////////////

class RGBColor {
    constructor(r,g,b) {
      this._r = r;
      this._g = g;
      this._b = b;
    }

    get R() {
        return this._r;
    }

    get G() {
        return this._g;
    }

    get B() {
        return this._b;
    }
  }
  
  /////////////////////////////
  // ---- Movable piece ---- //
  /////////////////////////////
  
  class Piece {
    constructor(x, y, color) {
      this._radius = c_pieceRadius;
      this._x = x;
      this._y = y;
      this._color = color;
    }
  
    render() {
  
     fill(
        this._color.R, 
        this._color.G, 
        this._color.B
      );
  
     ellipse(this._x, this._y, this._radius*2, this._radius*2);
    }
  }