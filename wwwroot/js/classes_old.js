/////////////////////
// ---- Color ---- //
/////////////////////

class RGBColor {
    constructor(r,g,b,a) {
      this._r = r;
      this._g = g;
      this._b = b;
      this._a = a;
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

    get A() {
      return this._a;
  }

    setFill(){
      fill(this.R,this.G,this.B, this.A );
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
      this._isMouseHover = false;
    }

    mouseOver(mouse_X, mouse_Y) {
       if(dist(mouse_X, mouse_Y, this._x, this._y) < this._radius) {
        this._isMouseHover = true;     
      }   
      else {
        this._isMouseHover = false;        
      }

      return this._isMouseHover;
    }
  
    render() {
      if(!this._isMouseHover)
        this._color.setFill();
      else
        hoverColor.setFill();

      ellipse(this._x, this._y, this._radius*2, this._radius*2);
    }
  }