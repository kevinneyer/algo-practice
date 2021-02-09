//Given an array of numbers, print each number, one every second.


const timedPrint = (array) => {
    
    while(array.length !== 0){
    // for(let i = 0; i < array.length; i++){
        
       let interval = setInterval(() => {
            console.log(array[0], array)
            array.splice(0,1)
       }, 1000);
        return() => {clearInterval(interval)}
    } 
}

// const numbers = (array) => {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }



