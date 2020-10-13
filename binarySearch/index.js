/**
 * Find a target number within a sorted Array
 * eg:
 * array = [2,4,6,7,10,33,51,60,71]
 * target = 33
 */

 const findTarget = (array, target) => {
   let mid = Math.floor( array.length / 2 )

   while( array.length !== 0){
    if (array[mid] < target){
        array.splice(0, mid)
        mid = Math.floor( array.length / 2 )
    } 
    else if (array[mid] > target){
        array.splice(mid, array.length - 1)
         mid = Math.floor( array.length / 2 )
    } 
    else if (array[mid] === target){
        return array[mid]
    } 
  }
 }