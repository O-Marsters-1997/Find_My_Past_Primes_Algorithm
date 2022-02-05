// Function to get prime numbers
function getPrimes(num) {
  // initialises empty array of primes
  let primes = [];
  //   The below for loop iterates through an array starting at 2 (to exclude 1 from being included as prime), until the number inputted
  // It then checks to see if numbers are divisible by any number other than 1 or themseleves.
  // If they are then they are excluded from being considered as prime
  for (let i = 2; primes.length < num; i++) {
    let divisibleNum = false;
    for (let count = 2; count < i; count++) {
      if (i % count === 0) {
        divisibleNum = true;
        break;
      }
    }
    //   Any integers in loop are then added to an array of primes if they are not divisible by any number other than themself or 1.
    if (divisibleNum == false) {
      primes.push(i);
    }
  }
  //   The array of primes is then returned
  return primes;
}

// Function to get values to insert into multiplication table with given array of prime numbers as input
const getMultiples = (numArray) => {
  // Multiples are initialised as being an empty array
  let multiples = [];
  //   The for loop iterates over the integers in the array of primes
  // A nested for loop is used to square the number of results, because it means that every instance of an integer in the primes array is multiplied by both itself and every other integer.
  for (i of numArray) {
    for (j of numArray) {
      let k = i * j;
      //   After every index is multiplied by itself and every other index. It is then added to the multiples array.
      multiples.push(k);
    }
  }
  //   The multiples array is returned
  return multiples;
};

// This function gets user input, it then runs the getPrimes  function based on this input and the getMultiples function based on the return value of getPrimes
// This is not used to display the table but was used to test the earlier functions in node.
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

// This function initialises an empty table within the table container
function writeTable() {
  const cont = document.getElementsByClassName("table-container")[0];
  cont.appendChild(document.createElement("table"));
  document.querySelector("table").classList.add("table");
}

// This function fills this table with the correct values from the getMultiples function
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

  //   Create row that has a `td` of x innerHTML value.The first square of a multiplication table must be empty.
  const row1 = document.createElement("tr");
  row1.innerHTML = `<th>X</th>`;

  //   Iterates through a list of primes and creates a heading for each one in the first table row
  for (let i = 0; i < primes.length; i++) {
    let col = document.createElement("th");
    col.innerHTML = primes[i];
    row1.appendChild(col);
  }
  //   Finalise creation of firs table row.
  table.appendChild(row1);

  //   Iterates through primes creating a table row for each
  for (i of primes) {
    let row = document.createElement("tr");
    // The first child of each table row must be the prime itself
    row.innerHTML = `<th> ${i} </th>`;

    // Iterates through multiples adding as many values of multiples to table row as there are primes in the table.
    multiples.forEach((num) => {
      while (row.children.length <= primes.length) {
        row.innerHTML += `<td>${num}</td>`;
        break;
      }
    });
    // Removes the first few indeces of the multiples array, from 0 until the number of primes in the table.
    // This means that when the next table row is created the table row is not filled with duplicate `td` values from the previous row.
    multiples.splice(0, primes.length);
    // once the rows have been set up properly, they are added to the table and displayed.
    table.appendChild(row);
  }
}

module.exports = { getPrimes, getMultiples };
