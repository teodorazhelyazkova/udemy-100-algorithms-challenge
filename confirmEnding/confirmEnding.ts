export function confirmEnding(str: string, target: string) {
    const strEnding = str.substring(str.length - target.length);

    return strEnding === target;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
