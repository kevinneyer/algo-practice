// Given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

module.exports = {
    plusOne: function(digits) {
        let returnArray = [];
        let plusOneValue = BigInt(digits.join('')) + BigInt(1);

        for (let i = 0; i < plusOneValue.toString().length; i++) {
            returnArray.push(parseInt(plusOneValue.toString()[i]));
        }

        return returnArray;
    }
};