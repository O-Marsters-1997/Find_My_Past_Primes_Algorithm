const getPrimes = require('./main')

describe('getPrimes', ()=> {
    it('should return an array of equal lenth to the number that is inputted', ()=> {
        expect(getPrimes(4).length).toBe(4)
    })

    it('should return the number two always as the first prime number of the array', ()=> {
        expect(getPrimes(2)[0]).toBe(2)
    })
})

describe('getMutliples', ()=> {
    it('should return aa array of length n^2', ()=> {
        
    })
})