// A self-dividing number is a number that is divisible by every digit it contains.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

//initial solution
const selfDividingNumbers = (left, right) => {
    let array = []
    let final = []
  
    for(let i = left - 1; i <= right - 1; i++){
        let num = i + 1
        array.push(num)
    }
  
    for(let j = 0; j < array.length; j++){
        let number = array[j]
        while(number > 0){
            let remainder = Math.floor(number % 10)
            if(array[j] % remainder === 0){
                number = Math.floor(number / 10)
            }else
                break;
        }
        if(number === 0){
            final.push(array[j])
        }
    }
    return final
}