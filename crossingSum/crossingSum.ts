export function crossingSum(matrix: number[][], a: number, b: number): number {
    // Sum of all elements in the a-th row
    const rowSum = matrix[a].reduce((sum, value) => sum + value, 0);

    // Sum of all elements in the b-th column
    const colSum = matrix.reduce((sum, row) => sum + row[b], 0);

    console.log('colSum', colSum);

    // Subtract the intersecting element (matrix[a][b]) as it is added twice
    const intersectingElement = matrix[a][b];

    // Calculate the final sum
    const result = rowSum + colSum - intersectingElement;

    return result;
}

// console.log(crossingSum([[1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [3, 3, 3, 3]], 1, 3));
