export function compareIntegers(a: string, b: string): string {
    const intA = parseInt(a);
    const intB = parseInt(b);

    if (intA > intB) {
        return 'greater';
    } else if (intA < intB) {
        return 'less';
    } else {
        return 'equal';
    }
}

// console.log(compareIntegers('12', '13'));
// console.log(compareIntegers('875', '799'));
// console.log(compareIntegers('1000', '1000'));
