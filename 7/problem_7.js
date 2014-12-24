// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.
// 
// What is the 10 001st prime number?

// Currently uses trial division on odd numbers until the right
// condition is reached (it's position in the primes array being
// 10000, making it the 10,001st prime).  A sieve is the next step
// for generating primes efficiently.
//   See http://en.wikipedia.org/wiki/Generating_primes
function findPrime() {
  var primes = [2];
  var n = 3;

  while (true) {
    if (isPrime(n))
      primes.push(n);
    if (primes.indexOf(n) === 10000)
      return n;

    n += 2; // only need to check odds
  }
}

function isPrime(n) {
  if (n < 2) return false;

  for (var i = 2; i <= Math.pow(n, 0.5); i++) {
    if (n % i === 0)
      return false;
  }

  return true;
}
