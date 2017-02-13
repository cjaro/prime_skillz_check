// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base){
var side1 = 3;
var side2 = 4;
var base = 5;

function area(side1, side2){
 var newArea= ((side1*side2)/2);
  return newArea;
}
function perimeter(side1, side2, base){
var newPerimeter = (side1 + side2 + base);
return newPerimeter;
}
}
// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

function RightTriangle(side1, side2, base){
 this.side1 = 3;
 this.side2 = 4;
 this.base = 5;
};

var newVar = new RightTriangle(side1, side2, base);

console.log();

