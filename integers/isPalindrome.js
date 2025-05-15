// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

const isPalindrome = (x) => {
    // Eearly return if less than 0, because "-" will cause it to never be true.
    if (x < 0) {
        return false;
    }
    
    // convert number to string
    let stringValue = x.toString();
    // split string into array to it can be iterated
    let array = stringValue.split("");
    // get length of input
    let length = stringValue.length;
    // declare backwards variable
    let backwardsString = "";

    // loop the the array "backwards" and concatenate onto backwards variable
    for (let i = length - 1; i >= 0; i--) {
        backwardsString += array[i];
    }

    // return if x.toString() is equal to backwards string
    return stringValue === backwardsString;
};