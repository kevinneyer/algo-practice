/**
 You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.
*/

/**
   To-do:
      loop through string to visit each letter
      have a counter for total A's => if > 1, return false
      have a counter for consecutive L's => if > 2, return false
*/

// Very Brute
const checkRecord = (s) => {
    let absences = 0
    let lates = 0
    let array = []
    let total
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'A'){
            absences++
        } else if
            (s[i] === 'L'){
                if(s[i + 1] === 'L'){
                    lates += 1 
                } else if
                    (s[i + 1] !== 'L' || i === s.length - 1){
                    lates += 1
                    total = lates
                    lates = 0
                }
                array.push(total)
            }
    }
    
    let sorted = array.sort((a,b) => a > b ? -1 : 1)[0]
    
    if( absences > 1 || sorted > 2){
        return false
    } else
        return true
}