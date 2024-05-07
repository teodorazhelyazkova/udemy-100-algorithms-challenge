export function arrayPreviousLess(items: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < items.length; i++) {
    let found = false;

    for (let j = i - 1; j >= 0; j--) {
      if (items[i] > items[j]) {
        result.push(items[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(-1);
    }
  }

  return result;
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
