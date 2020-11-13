/**
 Given an array of integers A sorted in non-decreasing order, 
 return an array of the squares of each number, also in sorted non-decreasing order.
 */

 /**
  Example:
    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
  */

// Using for...of and sort()
module.exports = {
  sortedSquares: function(A){
    let newArray = []
    for(const value of A){
        newArray.push(value ** 2 )
    }
    return newArray.sort((a,b) => a < b ? -1 : 1)
  }
}