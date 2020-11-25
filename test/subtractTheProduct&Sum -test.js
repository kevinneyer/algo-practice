const expect = require('chai').expect
const subtractProductAndSum = require('../integers/subtractTheProduct&Sum')

describe('subtractProductAndSum', function(){
    it('Given an integer number n, return the difference between the product of its digits and the sum of its digits', function(){
        let n = 123456789
        let result = subtractProductAndSum(n)
        expect(result).to.equal(362835)
    })
})