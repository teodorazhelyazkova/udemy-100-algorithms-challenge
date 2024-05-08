export function avoidObstacles(inputArray: number[]): number {
  const maxJump = Math.max(...inputArray) + 1;

  for (let jump = 1; jump <= maxJump; jump++) {
    if (inputArray.every((obstacle) => obstacle % jump !== 0)) {
      return jump;
    }
  }

  return maxJump;
}

// console.log(avoidObstacles([5, 3, 6, 7, 9]));
