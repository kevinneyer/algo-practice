function reverseString(s: string[]): void {
    let i: number = 0;
    let j: number = s.length - 1;
    let sCopy: Array<string> = JSON.parse(JSON.stringify(s));

    while (i < s.length) {
        s[i] = sCopy[j];
        i++;
        j--;
    }
};