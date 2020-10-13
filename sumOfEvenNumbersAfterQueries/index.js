/** 
 * We have an array A of integers, and an array queries of queries.
For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.
(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)
Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query. 
*/


const sumEvenAfterQueries = (A, queries) => {
    let finalArray = []
    
    for(let i = 0; i < queries.length; i++){
        A[queries[i][1]] = A[queries[i][1]] + queries[i][0]
        finalArray.push(addEmUp(A))
    }
    return finalArray
};

//helper method to add even integers of array during each iteration
const addEmUp = (array) => {  
    let sum = 0
    for(let j = 0; j < array.length; j++){
        if(array[j] % 2 === 0){
            sum += array[j]
        }
    }
    return sum
}