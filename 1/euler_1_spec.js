// These specs require jasmine-node, which can be installed via the npm
// (node package manager).  Run them with the jasmine-node command: $ jasmine-node
// euler_1_spec.js
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

describe('sum of multiples', function() {
  it('should correctly compute the sum', function() {
    expect(sumOfMultiples(10)).toEqual(23);
  });
});

// Another classic imperative approach.  Here we:
// Define a function sumOfMultiles that takes a single argument
// Initialize a variable that will store our running total
// Use a for loop to build up that variables value
// And finally we return the total from the function
function sumOfMultiples(up_to) {
  var total = 0;

  for (var i = 0; i < up_to; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      total += i;
  }

  return total;
}
