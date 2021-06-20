
//Makes 2D Array with certain number of columns
//Every column has an array with a certain number of rows
function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for(var i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;

//Availability will be for the upcoming week
var cols = 7;

//Mocks will be in two hour timespans
var rows = 12;

//Width and height for rect
var w = 10;

//Creates 2D array of cell objects in the form of a grid
function setup(){
    createCanvas(2000,2000);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j] = new Cell(i * w, j * w, w);
        }
    }
}

//Displays what is in each cell
function draw() {
    background(255);
    for (var i = 0; i < cols; i++){
        for(var j =0; j < rows; j++){
            grid[i][j].show();
        }
    }
}