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
