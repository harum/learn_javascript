//function declaration is hoisted
function hello(name) {
  console.log("Hello " + name);
}

//class delcaration
//class declaration is not hoisted
//you need to declare your class before access it


//class declaration example
class Polygon1 {
  constructor(height, width) {
    console.log(this);
    this.height = height;
    this.width = width;
  }
}
//end of example


//Class expression
//class expression is another way to define a class
//but it also suffer from the same hoisting issues mentioned for class
//delcaration

//unamed
var Polygon2 = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//named
var Polygon3 = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


//Protoype method
class Polygon4 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square4 = new Polygon4(10,10);
console.log(square4.area);
console.log(square4.calcArea());


//static methods
//static method is called without instantiating their class
//static method is not callable when class is instantiated

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const p3 = new Point(15, 15);

console.log(Point.distance(p1, p2));
//we can not call like below
//console.log(p3.distance(p1, p2));
