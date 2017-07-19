// object literal do not require instantiation using `new`
let DogObjectLiteral = {
  // object literal can contain properties
  breed: 'kintamani',
  sound: 'woof',
  // object literal can contain object
  temperaments: {
    lively: true,
    devoted: true,
    alert: true,
    docile: false
  },
  // object literal can contain method
  // prefer eslint func-names
  // to aid in debugging
  // so we give name to function expressions
  bark: function bark() {
    return(
      // we can refer by the object variable
      DogObjectLiteral.breed + ' bark ' + DogObjectLiteral.sound + '!'
    )
  },
  poop: function poop() {
    return(
      // we also can refer by the `this` key word
      this.breed + ' poop'
    )
  },
  updateTemperaments: function updateTemperaments(newTemperaments) {
    if (typeof newTemperaments === 'object') {
      this.temperaments = newTemperaments;
    }
  }
}

console.log(DogObjectLiteral.bark());
// kintamani bark woof!

console.log(DogObjectLiteral.poop());
// kintamani poop

console.log(DogObjectLiteral.temperaments);
// { lively: true, devoted: true, alert: true, docile: false }

DogObjectLiteral.updateTemperaments({
  lively: true,
  alert: true
});
console.log(DogObjectLiteral.temperaments);
// { lively: true, alert: true }

// if we are opting for this techique,
// we may be also interested in Module pattern.
// But Module pattern only use object literals as return value
// from a scoping function
