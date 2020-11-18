//Given a non-empty list of words, return the k most frequent elements.

//Extremely Brute Force
const topKFrequent = (words, k) => {
    let hashMap = {}
    
    for(let i = 0; i < words.length; i++){
        if(hashMap[words[i]]){
            hashMap[words[i]] += 1
        } else
            hashMap[words[i]] = 1
    }
    
   let array = []
   for(let j = 0; j < words.length; j++){
       array.push(hashMap[words[j]])
    }
    array.sort((a,b) => a < b ? -1 : 1)
  
    let wonka = new Set()  
    for(let k = 0; k < array.length; k++){
        for(let l = 0; l < words.length; l++){
            if(hashMap[words[l]] === array[k]){
                wonka.add(words[l])
            }
        }
    }

    let answer = []
    for(const element of wonka){
        answer.push(element)
    }

   return answer.splice(answer.length - k)
};