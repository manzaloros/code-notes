    function largestPrimeFactor(n) {
      //make prime factor array
      let primeFactors = [];
      //iterate over number
      for (let i = 1; i <= n; i++) {
        //if n % i === 0 && isPrime
        if (n % i === 0 && isPrime(i)) {
          //add i to the factors array
          primeFactors.push(i);
        }
      }
      //return largest number from the factors array
      return primeFactors.reduce((largest, current) => current > largest ? current : largest);
    }

    //function is prime
    function isPrime(n) {
      let factors = [];
      for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
          factors.push(i);
        }
      }
      return factors.length === 2;
    }

    console.log(largestPrimeFactor(10))