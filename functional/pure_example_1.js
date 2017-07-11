var xs = [1, 2, 3, 4, 5];

//pure
//slice is pure
console.log(xs.slice(0, 3));
console.log(xs.slice(0, 3));
console.log(xs.slice(0, 3));
console.log(xs.slice(0, 3));

//impure
//splice is impure
console.log(xs.splice(0, 3));
console.log(xs.splice(0, 3));
console.log(xs.splice(0, 3));


//impure
//depends on mutable variable minimum
var minimum = 21;

var checkAge = function(age) {
  return age >= minimum;
};
console.log(checkAge(22));
minimum = 50;
console.log(checkAge(22));


//pure version
var checkAge2 = function(age) {
  var minimum2 = 21;
  return age >= minimum2;
};
console.log(checkAge2(22));
minimum = 50;
console.log(checkAge2(22));
