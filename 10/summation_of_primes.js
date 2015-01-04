// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

// Generate primes below 2 million, add them
// Naive solution will just loop through odd numbers, adding
// primes to a total to be returned.
function summationOfPrimes() {
  // 2 is the only even prime number, start with it as the default total
  var sum = 2;

  for (var n = 3; n < 2000000; n += 2) {
    if (isPrime(n))
      sum += n;
  }

  return sum;
}

function isPrime(n) {
  if (n < 2) return false;

  for (var i = 2; i <= Math.pow(n, 0.5); i++) {
    if (n % i === 0)
     return false;
  }

  return true;
}

console.log(summationOfPrimes());

