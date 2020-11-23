// Given a non-empty array of integers, return the k most frequent elements.

//Very Brute Force
const topKFrequent = (nums, k) => {
    let hashTable = {}
    let array = []
    let answer = []
    
    for(let i = 0; i < nums.length; i++){
        if(hashTable[nums[i]]){
            hashTable[nums[i]] += 1
        } else
            hashTable[nums[i]] = 1
    }
    
    for(const value in hashTable){
        array.push(hashTable[value])
    }
    
   let sortedArray= array.sort( (a,b) => a < b ? 1 : -1 )
 
   for(const number of sortedArray ){
       for(const element in hashTable){
           if(hashTable[element] === number && !answer.includes(element)){
               answer.push(element)
           }
       }
    }
  return answer.splice(0, k)
}