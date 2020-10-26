/**
 * Given a singly linked list, determine if it is a palindrome.
 * Example:
 *     Input: 1->2->2->1
       Output: true
 */

 //Very brute force. Needs refactoring
const isPalindrome = (head) => {
    let array = []
    let current = head

    // iterate over linked list
    // if current is valid, push current.val
    // reassign current to current.next
    // loop stops once current.next === null
    while(current !== null){
        array.push(current.val)
        current = current.next
        
    }
    
    //logic for marking as palindrome
    let count = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] === array[(array.length - 1) - i]){
            count++
        }
    }
    if(count === array.length){
        return true
    } else
        return false
};