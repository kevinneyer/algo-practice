"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseString(s) {
    let i = 0;
    let j = s.length - 1;
    let sCopy = JSON.parse(JSON.stringify(s));
    while (i < s.length) {
        s[i] = sCopy[j];
        i++;
        j--;
    }
}
;
//# sourceMappingURL=test.js.map