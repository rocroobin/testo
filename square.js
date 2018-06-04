var paramA = process.argv[2];
var paramB = process.argv[3];
var a = parseInt(paramA, 10);
var b = parseInt(paramB, 10);

//console.log("программа прочитала", typeof a, b);

function hip(katetA, katetB) {
    return Math.sqrt(katetA * katetA + katetB * katetB);
}

function rad(a, b, c) { 
    //console.log("радиус окружности", a, b, c);
    var p = a + b - c;
    //console.log("периметр", p);
    return p / 2;
}

function square(radius) {
    return 3.14 * radius * radius;
}

var c = hip(a, b);
//console.log("гипотенуза", c);
var r = rad(a, b, c);
//console.log("радиус", r);
var s = square(r);
console.log(s);
