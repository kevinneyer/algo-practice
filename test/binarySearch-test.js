const expect = require('chai').expect
const binarySearch = require('../binarySearch/index.js')

describe('binarySearch', function(){
    it('given an array, finds the give target number', function(){
        let array = [2,4,6,7,10,33,51,60,71]
        let target = 33
        expect(binarySearch(array, target)).to.equal(33)
    })
})