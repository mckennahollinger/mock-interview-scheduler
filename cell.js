
//Every cell is selectable and appearance will change upon selection
function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.time = true;
    this.colored = true;
}

//Constructor function to show all square cells
Cell.prototype.show = function(){
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.w);
}