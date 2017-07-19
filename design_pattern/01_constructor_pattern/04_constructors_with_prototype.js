// constructor with prototype
// the function below behave like constructor
// when called with keyword `new`

function Dog( breed, sound ) {
  this.breed = breed;
  this.sound = sound;
}

// but now, bark function is defined in the prototype
Dog.prototype.bark = function () {
  return(
    this.breed + ' bark ' + this.sound + '!'
  )
};

// creating instances
let myCihuahua = new Dog('cihuahua', 'wooof');
let myKintamani = new Dog('kintamani', 'gukguk');

console.log(myCihuahua.bark());
// cihuahua bark woof!
console.log(myKintamani.bark());
// kintamani bark woof!


// ---------------------------------------------------------
// it is solve the not optimal approach from the basic constructor
// so the memory usage is more efficient
console.log( myCihuahua == myKintamani )
// false because it is different object
console.log( myCihuahua.bark == myKintamani.bark )
// true because it refer to the same prototype of Dog
