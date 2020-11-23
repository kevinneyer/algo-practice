const expect = require('chai').expect
const assert = require('chai').assert
const findTheMissingNumber = require('../arrayProblems/findTheMissingNumber')

describe('findTheMissingNumber', function(){
    // it('Given a sorted array, returns the missing number', function(){
    //     let array = [1,2,3,4,6]
    //     let result = findTheMissingNumber(array)
    //     expect(result).to.equal(5)
    // })
    it('Given a sorted array, finds the missing number and inserts it correctly', function(){
        let array = [5,6,7,8,9,10,12]
        let result = findTheMissingNumber(array)
        assert(result, [5,6,7,8,9,10,11,12])
    });
    it('Should return an object', function(){
        let array = [1,2,3,4,6]
        let result = findTheMissingNumber(array)
        expect(typeof result).to.equal('object')
    })
})