class XPosition{
    constructor(x, y){
        this._x = x;
        this._y = y;
    }
}

class XSquare {
    constructor(position, rendererFunc){
        this._player = -1;
        this._position = position; // Position represents the x, y coordinates within the gameboard, rangeing from 0,0 to 2,9
        this._rendererFunc = rendererFunc; // Inject the renderer to separate game logic from rendering
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
    }

    addSquare(s){
        this._squares.push(s);
    }

    render(){
        this._squares.forEach(function(s){
            s.render();
        })
    }   
}

function setup(){
    let b = new XBoard();

    for(let i = 0; i < b._numberOfSquares; i++){
        let y = int(i / b._width);
        let x = int(i % b._width);
        if(i > b._width - 1 && i <= b._width * 2 - 1){
            x = b._width - x; // Invert the order for the second row
        }
        let s = new XSquare(new XPosition(x,y), squareRenderer);
        b.addSquare(s);
    }
    b.render();
}

function squareRenderer(square){
    // P5 render logic
}