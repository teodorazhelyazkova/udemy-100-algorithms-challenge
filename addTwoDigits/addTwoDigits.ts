export function addTwoDigits(n: number): number {
  const numbers = n.toString().split("");

  return parseInt(numbers[0]) + parseInt(numbers[1]);
}

console.log(addTwoDigits(29));
