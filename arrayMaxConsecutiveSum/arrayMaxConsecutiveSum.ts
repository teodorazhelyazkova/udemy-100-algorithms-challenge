export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += inputArray[i];
  }

  maxSum = currentSum;

  for (let i = k; i < inputArray.length; i++) {
    currentSum += inputArray[i] - inputArray[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
