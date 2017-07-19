// we have mathModule
const mathModule = (function (){
  return {
    min: function min(list) {
      let min = null;
      for (let i = 0; i < list.length; i += 1) {
        if(min === null || min > list[i]) {
          min = list[i]
        }
      }
      return min;
    }
  }
}())

console.log(mathModule.min([4, 1, 19, 45]))
// 1


// we want to pull in mathModule into module below
// and alias mathModlue as we wish
// in real world, mathModule also can be replaced by global module like jQuery or lodash etc
const myReport = (function (m){
  const reportsValue = [80, 76, 88, 45, 68];

  return {
    getLowestValue: function getLowestValue() {
      return m.min(reportsValue);
    }
  }
}(mathModule))

console.log(myReport.getLowestValue());
// 45
