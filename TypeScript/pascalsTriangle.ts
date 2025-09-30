function generate(numRows: number): number[][] {
    let returnArray: number[][] = [];
    let previousRow: number[] = [];

    for (let i = 1; i <= numRows; i++) {
        let row: number[] = [];
        row.length = i
        row[0] = 1;
        row[i - 1] = 1;
        
        for(let j = 0; j < i; j++) {
            if (!row[j]) {
                row[j] = previousRow[j] + previousRow[j - 1]
            }
        }

        returnArray.push(row);
        previousRow = row;
    }

    return returnArray
};