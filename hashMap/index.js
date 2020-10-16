/**
Given an array of integers that is already sorted in ascending order, 
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers 
such that they add up to the target, where index1 must be less than index2.
 */

const twoSum = (numbers, target) => {
    let hashMap = {}
        
    for(let i = 0; i < numbers.length; i++){
        hashMap[numbers[i]] = i + 1
    }

    for(let j = 0; j < numbers.length; j++){
        let difference = target - numbers[j]
        if(hashMap[difference]){
            return [j + 1, hashMap[difference]]
        }
    }
}