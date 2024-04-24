export function arrayConversion(inputArray: number[]): number {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumOrProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }

  return inputArray[0];
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

function sumOrProduct(numbers: number[], isOdd: boolean): number[] {
  const result: number[] = [];

  for (let i = 0; i < numbers.length; i += 2) {
    const operation = isOdd
      ? result.push(numbers[i] + numbers[i + 1])
      : result.push(numbers[i] * numbers[i + 1]);

    result.push(operation);
  }

  return result;
}
