# Find_My_Past_Primes_Algorithm

- Olly Marsters
## Getting started

- `Jest` is installed as a development dependency. To review tests and make sure that they run, please run `npm i jest`.
- In the `package.json` in the root directory, change the default name of the test script to `jest`.
- Then run tests from the root directory with the command `npm run test`

- To see only the output of the `getMultiples` function in `main.js`, run the command `node main.js` from inside the `src` directory. 

- To view the whole front-end application, open the `index.html` file in the browser.

- Enter a number into the input field box, click the button and see a multiplication table for that number of prime numbers.

## Code that I am pleased with
- Starting on line 26 of `main.js`. I am pleased with the solution for getting the multiples of the primes.
- The nested for loop in my opionion provides a clean solution for ensuring that every integer is multiplied by itself and every other number in the primes array.
- I am also pleased with how I have managed to display and format the output of the multiples, in the front-end.
- The application is user friendly and comments throughout the code should make it clear what the process is for this algorithm to work.

## If I had more time 
- I would like to add functionality in the fron-end, whereby upon clicking on a certain value, it's whole column and row become highlighted. This would allow for easier testing of the application for large N inputs.
- I would also like to rewrite my getMultiples function, that incorporates new line characters at the points where a new table row should start, rather than displaying this is the front-end.