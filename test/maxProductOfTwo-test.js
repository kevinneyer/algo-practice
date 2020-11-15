const expect = require('chai').expect
const maxProduct = require('../arrayProblems/maxProductOfTwo').maxProduct
const maxProductTwo = require('../arrayProblems/maxProductOfTwo').maxProductTwo

describe('maxProduct', function(){
    it('Given an array, it will return the product of the two largest elements - 1 ', function(){
        let array = [4,7,9,1,4,22,100,3]
        let result = maxProduct(array)
        expect(result).to.equal(2079)
    })
})

describe('maxProductTwo', function(){
    it('Given an array, it will return the product of the two largest elements - 1 ', function(){
        let array = [-1,-2,-3,-4,4,9,-11]
        let result = maxProductTwo(array)
        expect(result).to.equal(24)
    })
})