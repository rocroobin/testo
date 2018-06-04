var paramX1 = process.argv[2];
var paramY1 = process.argv[3];
var paramX2 = process.argv[4];
var paramY2 = process.argv[5];
var x1 = parseInt(paramX1, 10);
var y1 = parseInt(paramY1, 10);
var x2 = parseInt(paramX2, 10);
var y2 = parseInt(paramY2, 10);


//console.log("программа прочитала", typeof x1, y1, x2, y2);

function vektorX(x1, x2) {
    return x1 + x2;
}

function vektorY(y1, y2) {
    return y1 + y2;
}

var x3 = vektorX(x1, x2);
var y3 = vektorY(y1, y2);
console.log(x3, y3);
