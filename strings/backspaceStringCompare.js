/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. 
 * # means a backspace character.
 * 
 *  Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".
 */

const backspaceCompare = (S, T) => {
    let s = []
    let t = []
    
    for(let i = 0; i < S.length; i++){
        if(S[i] !== '#'){
            s.push(S[i])
        } else
            s.pop()        
    }  // if it's not a backspace, add a letter to the end, otherwise delete the last letter from array
    
    for(let j = 0; j < T.length; j++){
        if(T[j] !== '#'){
                t.push(T[j])
        } else
            t.pop()
    }  // if it's not a backspace, add a letter to the end, otherwise delete the last letter from array

    
    if(s.join('') === t.join('')){
        return true
    } else
        return false
};