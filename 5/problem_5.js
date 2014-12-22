// 2520 is the smallest number that can be divided by each
// of the numbers from 1 to 10 without any remainder.
// 
// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

function smallestMultiple() {
    var n = 1;

    while (true) {
        for (var i = 1; i < 21; i++) {
            if (n % i === 0) {
                if (i === 20) return n;
            } else {
                n++;
                break;
            }
        }
    }
}

console.log(smallestMultiple());
