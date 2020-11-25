// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = (n) => {
    // create counters
    let product = 1 // Can't be 0. Anything times 0 === 0
    let sum = 0
    
    // iterate through number, obtaining and removing the last digit.
   while(n > 0){
       let num = Math.floor(n % 10)
       product *= num
       sum += num
       n = Math.floor(n / 10)
   }
    
    return product - sum
}

module.exports = subtractProductAndSum