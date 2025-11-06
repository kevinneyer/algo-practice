// Given a string s, find the length of the longest substring without duplicate characters.

/**
 * The goal of this method is to start at each character of the string and see how many additional 
 * characters can be added without that character being duplicated. On each loop, we're creating a
 * variable called currentString. This will be the string for non duplicated characters starting at each index.
 * 
 * If that currentString is longer than the longestString, we set longestString to the currentString. This will allow
 * us to keep the longestString throughout all iterations.
 */


function lengthOfLongestSubstring (s) {
    let longestString = '';

    for (let i = 0; i < s.length; i++) {
        let currentString = s.charAt(i);
        for (let n = i + 1; n <= s.length - 1; n++) {
            if (!currentString.includes(s.charAt(n))) {
                currentString += s.charAt(n);
            } else {
                break;
            }
        }
        
        if (currentString.length > longestString.length) {
            longestString = currentString
        }
    }

    return longestString.length;
};