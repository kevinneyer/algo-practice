// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

function generate(numRows) {
    // Declare return array.
    let returnArray = [];
    // Declare previousRow variable here so that we can scope correctly for usage in loop.
    let previousRow = [];

    // Loop the number of rows provided to generate the expected array format.
    for (let i = 1; i <= numRows; i++) {
        // Declare variable for the current row.
        let row = [];
        // Since it's each row array will be the length of that row number, assign length to i.
        row.length = i
        // Since the first element of each row will always be 1, assign to 1.
        row[0] = 1;
        // Since the last element of each row will always be 1, assign to 1. In the case of the first row,
        // this equals the statement above, so slightly redundent.
        row[i - 1] = 1;

        // Loop to assign the middle values of the row array.
        for(let j = 0; j < i; j++) {
            // Since the length is assigned, and we're setting first and last values, arrays greater in legnth than 1 or 2
            // will look like this [1, , , , 1]. Check to see if the element exists. If it doen't we need to assign a value.
            if (!row[j]) {
                // Value will be equal to adding the numbers of the previous row above it,
                row[j] = previousRow[j] + previousRow[j - 1]
            }
        }

        // Push row to returnArray array.
        returnArray.push(row);
        // Make the current row the previous row, so we can use it in the comparison in the next loop.
        previousRow = row;
    }

    return returnArray;
};