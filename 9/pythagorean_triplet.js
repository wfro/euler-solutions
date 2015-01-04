// Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Euclid's formula - http://en.wikipedia.org/wiki/Pythagorean_triple
// For two arbitrary integers m and n, where m > n
// a = m^2 - n^2, b = 2mn, c = m^2 + n^2
function pythagoreanTriplet() {
  for (var n = 1; n < 500; n++) {
    for (var m = (n + 1); m < 500; m++) { // remember m > n is required by the formula, hence m = n + 1
      var a = (m * m) - (n * n);
      var b = 2 * (m * n);
      var c = (m * m) + (n * n);

      if (a + b + c === 1000)
        return a * b * c;
    }
  }
}

console.log(pythagoreanTriplet());

