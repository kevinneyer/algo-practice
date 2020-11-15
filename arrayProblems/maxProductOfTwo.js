/**
 * Given the array of integers nums, you will choose two different indices i and j of that array. 
 * Return the maximum value of (nums[i]-1)*(nums[j]-1).
 */

 // Initial Brute Force 
 module.exports = {
     maxProduct : (nums) => {
    let maximum = 0
    
    for(let i = 0; i < nums.length; i++){
        for( let j = i + 1; j < nums.length; j++){
            if( (nums[i] - 1) * (nums[j] - 1) > maximum){
                maximum = (nums[i] - 1) * (nums[j] -1)
            }
        }
    }
    return maximum
},

// Refactored with sort operator 
 maxProductTwo: (nums) => {
    let sortedArray = nums.sort((a,b) => a < b ? -1 : 1)
        
    return (sortedArray[sortedArray.length - 1] - 1) * (sortedArray[sortedArray.length - 2] - 1)
}
}