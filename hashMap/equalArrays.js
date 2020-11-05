/**
  Given two integer arrays of equal length target and arr.
  In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.
  Return True if you can make arr equal to target, or False otherwise.
 */

 /** Example
  Input: target = [1,2,3,4], arr = [2,4,1,3]
  Output: true
  Explanation: You can follow the next steps to convert arr to target:
  1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
  2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
  3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
 */

 // Initial Brute Force
 const canBeEqual = (target, arr) =>{
    let hashMap = {}
    let secondHash = {}
    let counter = 0
    
    for(let i = 0; i < target.length; i++){
        if(hashMap[target[i]]){
            hashMap[target[i]] += 1
        } else
            hashMap[target[i]] = 1 
    }
    
    for(let j = 0; j < arr.length; j++){
       if(secondHash[arr[j]]){
            secondHash[arr[j]] += 1
        } else
            secondHash[arr[j]] = 1  
    }
    
    for(let k = 0; k < target.length; k++){
        if(hashMap[target[k]] === secondHash[target[k]]){
        counter += 1
        }
    }
        
    if(counter !== target.length){
        return false
    } else
        return true   
}

// Using sort
const canBeEqualTwo = (target, arr) =>{
    let targetSort = target.sort((a,b) => a < b ? -1 : 1 )
    let arrSort = arr.sort((a,b) => a < b ? -1 : 1 )

    for(let i = 0; i < target.length; i++){
        if(targetSort[i] !== arrSort[i]){
            return false
        } 
    }
    return true
}