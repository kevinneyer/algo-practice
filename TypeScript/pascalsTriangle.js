"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generate(numRows) {
    let returnArray = [];
    let previousRow = [];
    for (let i = 1; i <= numRows; i++) {
        let row = [];
        row.length = i;
        row[0] = 1;
        row[i - 1] = 1;
        for (let j = 0; j < i; j++) {
            if (!row[j]) {
                row[j] = previousRow[j] + previousRow[j - 1];
            }
        }
        returnArray.push(row);
        previousRow = row;
    }
    return returnArray;
}
;
//# sourceMappingURL=pascalsTriangle.js.map