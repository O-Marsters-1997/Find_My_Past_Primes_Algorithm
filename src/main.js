const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please choose a number!", function(number){
    console.log(`returing the first ${number} prime numbers`)
    process.exit(0)
})