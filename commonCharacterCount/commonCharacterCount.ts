export function commonCharacterCount(s1: string, s2: string): number {
    let count = 0;
    const arrayFromS1 = Array.from(s1);
    const arrayFromS2 = Array.from(s2);

    arrayFromS1.forEach((e) => {
        if (arrayFromS2.includes(e)) {
            count++;
            arrayFromS2.splice(arrayFromS2.indexOf(e), 1);
        }
    });

    return count;
}

// console.log(commonCharacterCount('aabcc', 'adcaa'));
