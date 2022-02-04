const getPrimes = require('./main')

describe('getPrimes', ()=> {
    it('should return an array of equal lenth to the number that is inputted', ()=> {
        expect(getPrimes(4).length).toBe(4)
    })
})