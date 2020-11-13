const assert = require('chai').assert
const sortedSquares = require('../arrayProblems/squaresOfASorted.js').sortedSquares  

describe('sortedSquares', function(){
    it('squares each element of an array and returns a sorted array of squares', function(){
        let result = sortedSquares([-4,-1,0,3,10])
        assert(result, [0,1,9,16,100])
    })
})