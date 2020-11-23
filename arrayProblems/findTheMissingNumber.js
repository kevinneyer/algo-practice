/** Given a sorted array, finds and returns the missing number */

//array = [1,2,3,4,6]
const findTheMissingNumber = (array) => {
    let number;
    for(let i = 1; i < array.length; i++){
        number = array[i-1] + 1
        if(array[i] != number){
            array.splice(i, 0, number)
        }
    }
    return array
}

module.exports = findTheMissingNumber