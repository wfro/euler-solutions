// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.


// So this is a first solution to problem 4.  Looking to reudce the number
// of iterations needed, get rid of nested conditionals if at all possible, just
// generally finding a clear solution with less code.
function largestPalindrome(numDigits) {
  var numOne, numTwo;
  numOne = numTwo = assignStartingNums(numDigits);
  var stopAt = parseInt(numOne.toString() + '0');
  var largestPal = 0;

  for (var i = numOne; i < stopAt; i++) {
    for (var j = numTwo; j < stopAt; j++) {
      var result = i * j;
      if (isPalindrome(result))
        if (result > largestPal)
          largestPal = result;
    }
  }

  return largestPal;
}

function isPalindrome(n) {
  return n.toString() === n.toString().split('').reverse().join('');
}

function assignStartingNums(numDigits) {
  var num = '1';
  for (var i = 1; i < numDigits; i++) {
    num += '0';
  }
  return parseInt(num);
}

console.log(largestPalindrome(1));
