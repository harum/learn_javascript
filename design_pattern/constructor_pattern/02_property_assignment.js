// 4 ways to set keys and values to an object

// Create object first
let myDog = {};

// 1. Dot syntax
// --------------------------
// set properties
myDog.sound = 'woooof';

// get properties
let sound = myDog.sound;
console.log(sound);
// woooof
// --------------------------


// 2. Square bracket syntax
// --------------------------
// set properties
myDog['breed'] = 'cihuahua';

// get properties
let breed = myDog['breed'];
console.log(breed);
// cihuahua
// --------------------------


// 3. Object.defineProperty
// --------------------------
// set properties
// with key 'origin' and value 'Mexico'
Object.defineProperty(myDog, 'origin', {
  value: 'Mexico',
  writable: true, // default is false
  enumerable: true, // default is false
  configurable: true // default is false
});

// get properties
// can be done using options 1 and 2
console.log(myDog.origin);
// Mexico
console.log(myDog['origin']);
// Mexico
// --------------------------


// 4. Object.defineProperties
// --------------------------
// set properties
// set more than one properties
// with key 'lifeSpan' and value '20' in years, and
// with key 'mass' and value '3' in kg
Object.defineProperties(myDog, {
  'lifeSpan': {
    value: 20,
    writable: true
  },
  'mass': {
    value: 3,
    writable: false
  },
  'temperament': {
    configurable: false,
    get: function() { return 'lively'; },
    set: function(value) {
      console.log('Setting `temperament` to ' + value);
    }
  }
});

// get properties
// can be done using options 1 and 2
console.log(myDog.lifeSpan);
// 20
console.log(myDog['mass']);
// 3
// --------------------------

// in the end you have a myDog object
// with its properties
console.log(JSON.stringify(myDog, null, 2));
//{
//  "sound": "woooof",
//  "breed": "cihuahua",
//  "origin": "Mexico"
//}
