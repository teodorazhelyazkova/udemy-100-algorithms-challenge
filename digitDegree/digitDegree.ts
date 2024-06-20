const sumOfDigits = (num: number): number => {
    return num
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
};

export function digitDegree(n: number): number {
    if (n < 10) {
        return 0;
    }

    let degreeCount = 0;

    while (n >= 10) {
        n = sumOfDigits(n);
        degreeCount++;
    }

    return degreeCount;
}

// console.log(digitDegree(5));
// console.log(digitDegree(10));
// console.log(digitDegree(91));
