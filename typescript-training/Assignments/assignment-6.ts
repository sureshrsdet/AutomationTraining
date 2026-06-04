function isPrime(n: number): boolean {
  // Primes must be greater than 1
  if (n <= 1) return false;

  // 2 is the only even prime
  if (n === 2) return true;

  // Exclude even numbers greater than 2
  if (n % 2 === 0) return false;

  // Check odd divisors from 3 up to sqrt(n)
  const limit: number = Math.sqrt(n);
  for (let i: number = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

// console.log(isPrime(7));
// console.log(isPrime(25));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(97));

// Find prime numbers in below list
const prNs: number[] = [2, 10, 3, 25, 5, 7, 11, 80, 13, 17, 19];

for (let num of prNs) {
  if (isPrime(num)) {
    console.log(`Prime Number : ${num}`);
  } else {
    console.log(`Not a Prime Number : ${num}`);
  }
}
