let createDog = function createDog() {
  return ({
    breed: 'kintamani',
    color: 'white'
  });
};

let myDog = createDog();
//console.log(myDog);

let myOtherDog = createDog();
//console.log(myOtherDog);

//console.log(myDog === myOtherDog);

let createJelly = function createJelly() {
  return {
    type: 'jelly',
    colour: 'red',
    scopes: 3
  }
}

let createIceCream = function createIceCream(flavour = 'vanilla') {
  return {
    type: 'ice cream',
    scopes: 2,
    flavour
  }
}

let createDesert = function createDesert() {
  return {
    type: 'desert',
    showType: function() {
      console.log(this.type);
      return(this.type);
    },
    bowl: [
      createJelly(),
      createIceCream()
    ]
  };
}

let myDesert = createDesert();
//console.log(myDesert);
//console.log(myDesert.type);
console.log(myDesert.showType());
