// In JavasScript, Module pattern used to emulate the concept of classes.
// With Module pattern we can include variables, private and public methods
// inside a single object.
// Because of JavaScript closure, variabes or methods are only available inside
// the module itself.
// Variables and methods in the returning object can be accessed as public
// API for everyone.

let savingsModule = (function(){
  // privates
  // private variables
  let currentAmount = 0;
  let interestRates = 0.0075;

  // private methods
  // prefer eslint func-names
  // to aid in debugging
  // so we give name to function expressions
  const calculateInterest = function calculateInterest() {
    return currentAmount * interestRates;
  }

  // return object exposed to the public
  return {
    // public variable
    accountNumber: '1400123145',

    // public methods
    deposit: function deposit(amount) {
      currentAmount += amount;
    },
    withdraw: function withdraw(amount) {
      currentAmount -= amount
    },
    getCurrentAmount: function getCurrentAmount() {
      return currentAmount;
    },
    addInterest: function addInterest() {
      currentAmount += calculateInterest();
    }
  }
}())

// if we console.log(currentAmount) here
// we will get `currentAmount is not defined`
// because `currentAmount` only lived inside savingsModule

console.log(savingsModule.getCurrentAmount());
// 0
console.log(savingsModule.accountNumber);
// 1400123145
savingsModule.deposit(40000);
savingsModule.deposit(60000);
console.log(savingsModule.getCurrentAmount());
// 10000
savingsModule.withdraw(50000);
console.log(savingsModule.getCurrentAmount());
// 50000
savingsModule.addInterest();
console.log(savingsModule.getCurrentAmount());
// 50375
