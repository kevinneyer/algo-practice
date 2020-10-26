/**
 * Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, 
switching the row and column indices of the matrix.

Example:
    Input: [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[1,4,7],[2,5,8],[3,6,9]]
 */

//Brute Force Attempt
const transpose = (A) => {
    let finalArray = []
    let array = []
    let spliced;
    let num = (A[0].length * A.length) / A[0].length // used to calculte final number of arrays
    
 
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){ //iterate through the same index of each matrix row and push into a new array
            array.push(A[i][j])
            if(i === num - 1){  // once it reaches the proper length, push array & splice to empty              
            spliced = array.splice(0, num)
            }
        }
      finalArray.push(spliced)    //push new row array into the final matrix array               
    }
  return finalArray
}