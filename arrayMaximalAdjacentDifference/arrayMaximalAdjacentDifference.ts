export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = 0;

  for (let i = 1; i < inputArray.length; i++) {
    let currentDiff = Math.abs(inputArray[i] - inputArray[i - 1]);

    maxDiff = Math.max(maxDiff, currentDiff);
  }

  return maxDiff;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
