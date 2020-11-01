/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */

 //First Brute Force Try
 const shuffle = (nums, n) => {
    let x = nums.splice(0, n)
    let y = nums
    let final = []
    
    for(let i = 0; i < n; i++){
        final.push(x[i], y[i])
    }
    
    return final
}

//Semi-Optimized by Less Variables
const secondShuffle = (nums, n) => {
    let x = nums.splice(0, n)
    
    for(let i = 0; i < n; i++){
        if(i == 0){
            nums.splice(0, 0, x[i])
        } else
            nums.splice(i * 2, 0, x[i])
    }
    return nums
};
