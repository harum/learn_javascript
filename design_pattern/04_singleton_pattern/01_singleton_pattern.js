const myCounterSingleton = (function (){
  // instance stores a reference to the Singleton
  let singletonInstance;

  const init = function init() {
    // Singleton

    // Private variables
    let counter = 0;

    // Private methods
    const addOne = function addOne() {
      counter += 1;
    }

    const generateRandom = function generateRandom(){
      return Math.floor(Math.random() * 10)
    }

    return {
      // Public method
      setRandom: function setRandom() {
        counter = generateRandom();
      },
      setZero: function setZero() {
        counter = 0;
      },
      increase: function increase() {
        return addOne();
      },
      getCounter: function getCounter() {
        return counter;
      },

      // Public property
      counterName: 'This is public counter name'
    };
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function getInstance() {
      if (!singletonInstance) {
        singletonInstance = init();
      }

      return singletonInstance;
    }
  }
}());

// Usage:
const counterA = myCounterSingleton.getInstance();
const counterB = myCounterSingleton.getInstance();

console.log(counterA.setZero === counterA.setZero);
// true -> because it refer to the same object

console.log(counterA.getCounter());
// 0
console.log(counterB.getCounter());
// 0

counterA.increase();
console.log(counterA.getCounter());
// 1
console.log(counterB.getCounter());
// 1 -> because it refer to the same object
