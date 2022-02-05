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
    console.log("hello")
    const cont = document.getElementsByClassName("table-container")[0];
    cont.appendChild(document.createElement("table"))
    document.querySelector("table").classList.add('table')
}

function fillTable(){
    const input = document.getElementById("input-type");
    const table = document.getElementsByClassName('table')[0];
    const row1 = document.createElement("tr");
    row1.innerHTML = `<td>X</td>`
    table.appendChild(row1);
    for (i of getPrimes(parseInt(input.value))) {
      let row = document.createElement("tr");
      row.innerHTML= `<td> ${i} </td>`
      
    //   for(j of getMultiples(getPrimes(parseInt(input.value)))) {
    //       let 
    //   }
      table.appendChild(row);
    }
}

module.exports = { getPrimes, getMultiples };
