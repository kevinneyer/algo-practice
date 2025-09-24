const assert = require('chai').assert;
const plusOne = require('../arrayProblems/plusOne.js').plusOne;

describe('plusOne', function(){
    it('increments the large integer by one and return the resulting array of digits', function(){
        let result = plusOne([1,2,3]);
        assert(result, [1,2,4]);
    })
});