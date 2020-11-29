const expect = require('chai').expect
const addDigits = require('../integers/addDigits')

describe('addDigits', function(){
    it('Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.', function(){
        let result = addDigits(38)
        expect(result).to.equal(2)
    })
})