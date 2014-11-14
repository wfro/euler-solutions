// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

// describe('sum of multiples', function() {
//   it('should correctly compute the sum', function() {
//     expect(sumOfMultiples(10)).toEqual(23);
//   });
// });

// Another classic imperative approach.  Here we:
// Define a function sumOfMultiles that takes a single argument
// Initialize a variable that will store our running total
// Use a for loop to build up that variables value
// And finally we return the total from the function
// function sumOfMultiples(up_to) {
//   var total = 0;
//
//   for (var i = 0; i < up_to; i++) {
//     if (i % 3 === 0 || i % 5 === 0)
//       total += i;
//   }
//
//   return total;
// }

function createNumArray(up_to) {
  var nums = [];

  for (var i = 1; i < up_to; i++) {
    nums.push(i);
  }

  return nums;
}

// expects an array of numbers
function functionalSumOfMultiples(range, sum) {
  if (typeof sum === 'undefined')
    functionalSumOfMultiples(range, 0); // provide default accumulator val if none exists

  if (range.length === 0) { // return sum from the base case cause we are DONE
    console.log(sum)
    return sum;
  } else {
    if (range[0] % 3 === 0 || range[0] % 5 === 0) { // range[0] is the head, range.slice(1, range.length) is the tail
      functionalSumOfMultiples(range.slice(1, range.length), sum + range[0]); // slice is exlcusive
    } else {
      functionalSumOfMultiples(range.slice(1, range.length), sum);
    }
  }
}

function reduceOfMultiples(range) {
  return range.reduce(function(sum, num) {
    return (num % 3 === 0 || num % 5 === 0) ? sum + num : num;
  });
}

var range = createNumArray(1000);
var result = functionalSumOfMultiples(range, 0);
console.log(result);

