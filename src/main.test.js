const { getPrimes, getMultiples } = require("./main");


describe('getPrimes', ()=> {
    it('should return an array of equal lenth to the number that is inputted', ()=> {
        expect(getPrimes(4).length).toBe(4)
    })

    it('should return the number two always as the first prime number of the array', ()=> {
        expect(getPrimes(2)[0]).toBe(2)
    })
})

// Test to make sure that the length of multiples returned is the length of the primes array to the exponent of 2.
describe('getMutliples', ()=> {
    it('should return an array of length n^2', ()=> {
        const  primes = getPrimes(5)
        expect(getMultiples(primes).length).toBe(primes.length**2);
    })

    // This is because the intercept of the first prime number will be 2^2, which is 4
    it('should always have as the ifrst number of the array integer 2', ()=> {
        const primes = getPrimes(5)
        expect(getMultiples(primes)[0]).toBe(4);
    })

    // This is because in the case of n being 5, the 5th prime number is 11.
    // Therefore the final intercept between the final integer in the primes list will be 121 as this is 11^2
    it("shouldhave as its last integer the number 121 ig getPrimes has an input of 5", () => {
      const primes = getPrimes(5);
      expect(getMultiples(primes).at(-1)).toBe(121);
    });
})