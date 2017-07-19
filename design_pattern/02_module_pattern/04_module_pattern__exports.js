const myDog = (function (){
  // module object
  const Dog = {};

  // private variable
  let sound = 'woooof';

  // private method
  let bark = function bark() {
    console.log(sound + '!');
  };

  // public method
  Dog.doubleBark = function poop() {
    bark();
    bark();
  }

  return Dog;
}())

myDog.doubleBark();
// woooof!
// woooof!
