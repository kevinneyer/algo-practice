// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// using all the original letters exactly once.

const answerUsingHash  = (s,t) => {
    // Set variables for hash for each string.
    let sHash = {};
    let tHash = {};

    // Since anagrams must contain the original letters used only once, it the two strings are not the same length,
    // return false. Using early return here to avoid doing any unnecessary looping below.
    if (s.length != t.length) {
        return false;
    }

    // Loop through s string.
    for (let i = 0; i < s.length; i++) {
        let currentLetter = s.charAt(i);
        // If the currentLetter already exists in the hash, increase its value. Else, set value equal to 1.
        if (sHash[currentLetter]) {
            sHash[currentLetter] += 1;
        } else {
            sHash[currentLetter] = 1;
        }
    }

    // Loop through t string.
    for (let i = 0; i < t.length; i++) {
        let currentLetter = t.charAt(i);
         // If the currentLetter already exists in the hash, increase its value. Else, set value equal to 1.
        if (tHash[currentLetter]) {
            tHash[currentLetter] += 1;
        } else {
            tHash[currentLetter] = 1;
        }
    }

    // Compare hashes of each string.
    for (const letterKey in sHash) {
        // Should the letter key not exist in the tHash or the value of that letterKey not be the same, return false.
        if (!tHash[letterKey] || tHash[letterKey] != sHash[letterKey]) {
            return false;
        }
    }

    // Should all checks above, strings are anagrams and return true.
    return true;
}

const answerUsingArrays = (s,t) => {
    // Split each string into their own arrays and sort
    let sArray = s.split('').sort((a,b) => a - b);
    let tArray = t.split('').sort((a,b) => a - b);

    // Since anagrams must contain the original letters used only once, it the two strings are not the same length,
    // return false. Using early return here to avoid doing any unnecessary looping below.
    if (sArray.length != tArray.length) {
        return false;
    }

    // Since the arrays are sorted, we can loop through incrementally. If the elements at each index are not the same,
    // the strings are not anagrams. Return false.
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] !== tArray[i]) {
            return false;
        }
    }

    // Passing the loop above, the strings are anagrams, and return true.
    return true;
};