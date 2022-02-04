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
      multiples.push(k);
    }
  }
  return multiples;
};

const getUserInput = () => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Please choose a number!", function (number) {
    console.log(getMultiples(getPrimes(number)));
    process.exit(0);
  });
};

console.log(getUserInput());

function writeTable(){
    document.write("<table id='table'>");
}

function fillTable(){
    const btn = document.getElementById('btn')
    console.log(btn)
    const table = document.getElementById('table');
    for(i of getPrimes()) {
        table.appendChild(document.createElement('tr'))
    }
}

module.exports = { getPrimes, getMultiples };
