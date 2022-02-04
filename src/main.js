const getUserInput = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please choose a number!", function (number) {
    console.log(`returing the first ${number} prime numbers`);
    process.exit(0);
  });
};

function getPrimes(num) {
  let primes = [];
  for (let i = 2; primes.length < num; i++) {
    let divisibleNum = false;
    for (let count = 2; count < i; count++) {
      if (i % count === 0) {
        divisibleNum = true;
        break;
      }
    }
    if (divisibleNum == false) {
      primes.push(i);
    }
  }
  return primes;
}

const getMultiples = (numArray) => {
  let multiples = [];
  for (i of numArray) {
   for (j of numArray) {
       let k = i * j;
       multiples.push(k)
   }
  }
  return multiples;
};
console.log(getPrimes(5000).at(-1))



module.exports = {getPrimes, getMultiples}