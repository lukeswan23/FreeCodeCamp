// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
  //not my code, taken from SO
  let sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  //
  return primes.reduce(function(accumulator, currentvalue) {
    return accumulator + currentvalue;
  });
  console.log(primes);
}

sumPrimes(10);

//need to calculate all prime numbers before/up to provided number
//for loop for every number up to provided number
//check if number is divisable by 2, if it is then it is NOT a prime number
//push numbers that aren't divisable by 2 to primeARray

//
