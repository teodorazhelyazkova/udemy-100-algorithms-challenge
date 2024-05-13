export function boxBlur(image: number[][]): number[][] {
  const numRows = image.length - 2;
  const numCols = image[0].length - 2;
  const blurredImage: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    blurredImage[i] = [];

    for (let j = 0; j < numCols; j++) {
      let sum = 0;

      for (let row = i; row < i + 3; row++) {
        for (let col = j; col < j + 3; col++) {
          sum += image[row][col];
        }
      }
      blurredImage[i][j] = Math.floor(sum / 9);
    }
  }

  return blurredImage;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
);
