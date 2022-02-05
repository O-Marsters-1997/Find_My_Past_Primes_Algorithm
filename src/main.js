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

function writeTable() {
  const cont = document.getElementsByClassName("table-container")[0];
  cont.appendChild(document.createElement("table"));
  document.querySelector("table").classList.add("table");
}

function fillTable() {
  // Defining variables
  const input = document.getElementById("input-type");
  const table = document.getElementsByClassName("table")[0];
  const primes = getPrimes(parseInt(input.value));

  // Clearing innerHtml of table before repeating the process agin
  table.innerHTML = "";

  // Adding all of the multiples to an array
  let multiples = [];
  for (j of getMultiples(primes)) {
    multiples.push(j);
  }

  const row1 = document.createElement("tr");
  row1.innerHTML = `<th>X</th>`;

  for (let i = 0; i < primes.length; i++) {
    let col = document.createElement("th");
    col.innerHTML = primes[i];
    row1.appendChild(col);
  }
  table.appendChild(row1);
  for (i of primes) {
    let row = document.createElement("tr");
    row.innerHTML = `<th> ${i} </th>`;

    multiples.forEach((num) => {
      while (row.children.length <= primes.length) {
        row.innerHTML += `<td>${num}</td>`;

        break;
      }
      
    });
    multiples.splice(0, primes.length);
    table.appendChild(row);
  }
}

module.exports = { getPrimes, getMultiples };
