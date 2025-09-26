// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// This is more of a brute force attempt by comparing strings.
function isPalindrome(s) {
    // Remove any non-alphanumeric characters and set to all lowercase.
    let alteredInput = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Declare variable for reversed string.
    let backwardsCompareString = "";

    // Loop through the altered input, starting at the end, and concatenate to create backwards string.
    for (let i = alteredInput.length - 1; i >= 0; i--) {
        backwardsCompareString += alteredInput[i];
    }

    // Return whether or not the two strings match.
    return alteredInput === backwardsCompareString;
};