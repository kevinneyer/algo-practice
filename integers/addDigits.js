// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Initial Brute Force
const addDigits = (num) => {
    let sum = 0
    let stringNum;
    
    while(num >= 10){
        stringNum = num.toString()
        for(let i = 0; i < stringNum.length; i++){
            sum += parseInt(stringNum[i])
        }
        num = sum
        sum = 0
    }
    return num
}