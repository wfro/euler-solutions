// Another classic imperative approach.  Here we:
// Define a function sumOfMultiles that takes a single argument
// Initialize a variable that will store our running total
// Use a for loop to build up that variable's value
// And finally we return the total from the function
function sumOfMultiples(up_to) {
  var total = 0;

  for (var i = 0; i < up_to; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      total += i;
  }

  return total;
}
