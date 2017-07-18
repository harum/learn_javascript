// Three common ways to create new objects in JavaScript
// Each of the following options will create a new empty object:

// 1
const newObject = {};
console.log(newObject);
// result {}

// 2
const anotherNewObject = Object.create( Object.prototype );
console.log(anotherNewObject);
// result {}

// 2
const otherNewObject = new Object();
console.log(otherNewObject);
// result {}
