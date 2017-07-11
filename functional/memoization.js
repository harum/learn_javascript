var squareNumber = memoize(function(x){
  console.log('in..');
  return x * x;
});

squareNumber(4);

squareNumber(4);

squareNumber(5);

squareNumber(5);
