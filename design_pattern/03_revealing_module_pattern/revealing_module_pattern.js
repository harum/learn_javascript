const savingsModule = (function (){
  // privates
  // private variables
  let currentAmount = 0;
  let interestRates = 0.0075;
  let accountNumber = '1400123145';

  // private methods
  // prefer eslint func-names
  // to aid in debugging
  // so we give name to function expressions
  const calculateInterest = function calculateInterest() {
    return currentAmount * interestRates;
  };
  const deposit = function deposit(amount) {
    currentAmount += amount;
  };
  const withdraw = function withdraw(amount) {
    currentAmount -= amount
  };
  const getCurrentAmount = function getCurrentAmount() {
    return currentAmount;
  };
  const addInterest = function addInterest() {
    currentAmount += calculateInterest();
  };

  // reveal public pointers to private function and properties
  return {
    deposit: deposit,
    withdraw: withdraw,
    amount: getCurrentAmount,
    addInterest: addInterest,
    number: accountNumber
  };
}())

console.log(savingsModule.amount());
// 0
console.log(savingsModule.number);
// 1400123145
savingsModule.deposit(40000);
savingsModule.deposit(60000);
console.log(savingsModule.amount());
// 10000
savingsModule.withdraw(50000);
console.log(savingsModule.amount());
// 50000
savingsModule.addInterest();
console.log(savingsModule.amount());
// 50375
