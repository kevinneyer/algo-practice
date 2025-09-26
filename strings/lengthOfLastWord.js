// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s) {
    // Split string into individual words and spaces.
    let sArray = s.split(' ');
    // Filter out any spaces to make an array of non-space characters only.
    let words = sArray.filter((item) => item !== '');
    // Grab the last words by finding the last item in the array.
    let lastWord = words[words.length - 1];

    // Return the length of last word.
    return lastWord.length;
};