function sumPrimes(num) {
    let sum = 0
  
    // console.log(num)
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
        if (num % i == 0)
          return false
      }
      return true
    }
    for (let i = 0; i <= num; i++) {
      if (isPrime(i)) {
        // console.log(i)
        sum += i
      }
    }
    return (sum);
}