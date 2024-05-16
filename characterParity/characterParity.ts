export function characterParity(symbol: string): string {
    const isDigit = !isNaN(Number(symbol));

    if (!isDigit) return 'not a digit';

    return Number(symbol) % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
