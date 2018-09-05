class XPosition{
    constructor(x, y){
        this._x = x;
        this._y = y;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }
}

class XSquare {
    constructor(position, rendererFunc){
        this._player = -1;
        this._position = position; // Position represents the x, y coordinates within the gameboard, rangeing from 0,0 to 2,9
        this._rendererFunc = rendererFunc; // Inject the renderer to separate game logic from rendering
        this._isMouseOver = false;
    }

    get isMouseOver(){
        return this._isMouseOver;
    }

    setMouseOver(value){
         this._isMouseOver = value;
    }

    get pos(){
        return this._position;
    }

    render(){
        this._rendererFunc(this);
    }
}

class XBoard {
    constructor(){
        this._width = 10;
        this._height = 3; 
        this._numberOfSquares = this._width * this._height; // Grid 10x3
        this._squares = [];
        this._hoverSquare = null;
    }

    addSquare(s){
        this._squares.push(s);
    }

    selectSquare(pos){
        var arrayPos = pos.x + pos.y * this._width;

        if(pos.x >= this._width || pos.y >= this._height || pos.x < 0 || pos.y < 0) {
            if(this._hoverSquare != null) {
                this._hoverSquare.setMouseOver(false);
            }
            this._hoverSquare = null;
            return false; // out of bounds; Not selected a square
        }

        var s =  this._squares[arrayPos];

        if(s == this._hoverSquare) // Already selected on previous frame
            return true;

        s.setMouseOver(true);

        if(this._hoverSquare != null){
            this._hoverSquare.setMouseOver(false);
        }

        this._hoverSquare = s;
        return true;
    }

    render(){
        this._squares.forEach(function(s){
            s.render();
        })
    }   
}

