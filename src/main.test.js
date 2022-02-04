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
})