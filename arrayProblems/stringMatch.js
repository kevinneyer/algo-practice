// Given an array of string words. Return all strings in words which is substring of another word in any order. 

const stringMatching = (words) => {
    let array = []
    for(let i = 0; i < words.length; i++){
        let example = words[i]
        let newWords = words.filter(word => word !== example)
        for(let j = 0; j < newWords.length; j++){
            if(example.includes(newWords[j]) && !array.includes(newWords[j])){
                array.push(newWords[j])
            }
        }
    }
    return array
};

//Sorting the initial words array does not require the filter to remove word being compared
const stringMatchingTwo = (words) => {
    let array = []
    let sortWords = words.sort((a,b) => a.length - b.length)
    for(let i = 0; i < sortWords.length - 1; i++){
        for(let j = i+ 1; j < sortWords.length; j++){
            if(sortWords[j].includes(sortWords[i]) && !array.includes(sortWords[i])){
                array.push(sortWords[i])
            }
        }
    }
    return array
}
