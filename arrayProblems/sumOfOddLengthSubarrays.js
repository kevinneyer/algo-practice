//Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays. 

const sumOddLengthSubarrays = (arr) => {
    let final = []   
    
    for(let i = 1; i <= arr.length; i++){
        if( i % 2 !== 0 ){
            for(let j = 0; j <= arr.length - i; j++){
                let num = arr.slice(j, (j + i)).reduce((a,b) => (a + b), 0)
                final.push(num)
            }
        }
    }
    return final.reduce((a,b) => (a + b), 0)
}