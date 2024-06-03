export function celsiusToFahrenheit(celsius: number): number {
    const factor = 9 / 5;
    const offset = 32;

    return celsius * factor + offset;
}

// console.log(celsiusToFahrenheit(-30));
// console.log(celsiusToFahrenheit(-10));
// console.log(celsiusToFahrenheit(0));
