// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Initial Brute Force
module.exports = addDigits = (num) => {
    
    while(num >= 10){
        let sum = 0
        let stringNum = num.toString()
        for(let i = 0; i < stringNum.length; i++){
            sum += parseInt(stringNum[i])
        }
        num = sum
    }
    return num
}


// More refined using ints and not converting to strings
const addDigitsTwo = (num) => {
    let n = num

    while(n >= 10){
        let sum = 0
        while(n > 0){
            sum += Math.floor(n % 10)
            n = Math.floor(n / 10)
        }
        n = sum
    }
  return n 
}

