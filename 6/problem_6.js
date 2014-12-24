// Find the difference between the sum of the squares of the
// first one hundred natural numbers and the square of the sum.
var nums = range(1, 100);

function sumOfSquares() {
  var squared = nums.map(function(n) {
    return n * n;
  });

  return squared.reduce(function(sum, n) {
    return sum + n;
  }, 0);
}

function squareOfSums() {
  var total = nums.reduce(function(sum, n) {
    return sum + n;
  }, 0);

  return total * total;
}

function range(start, end) {
  var a = [];

  for (var i = start; i <= end; i++) {
    a.push(i);
  }

  return a;
}

console.log(squareOfSums() - sumOfSquares());