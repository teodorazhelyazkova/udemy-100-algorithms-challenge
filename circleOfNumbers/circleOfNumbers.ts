export function circleOfNumbers(n: number, firstNumber: number): number {
    // Add half of n to firstNumber in order to push
    // the value halfway around the circle, then mod by n
    // to restrict the result to the boundary between 0 and n-1.
    return (firstNumber + n / 2) % n;
}

// console.log(circleOfNumbers(10, 2));
