// basic example of constructor
// the function below behave like constructor
// when called with keyword `new`

function Dog( breed, sound ) {
  this.breed = breed;
  this.sound = sound;

  this.bark = function () {
    return(
      this.breed + ' bark ' + this.sound + '!'
    )
  }
}

// creating instances
let myCihuahua = new Dog('cihuahua', 'wooof');
let myKintamani = new Dog('kintamani', 'gukguk');

console.log(myCihuahua.bark());
// cihuahua bark woof!
console.log(myKintamani.bark());
// kintamani bark woof!


// PROBLEM
// ---------------------------------------------------------
// problems with this basic constructors approach is
// 1. hard to implement inheritance
// 2. function `bark` redefinded for each of new object
console.log( myCihuahua == myKintamani )
// false because it is different object
console.log( myCihuahua.bark == myKintamani.bark )
// false because it redifined for each obejct

// this can be optimalized using Object.prototype
// ---------------------------------------------------------
