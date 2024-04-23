export function areSimilar(a: number[], b: number[]): boolean {
  if (a.toString() === b.toString()) {
    return true;
  }

  const array1 = [];
  const array2 = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      array1.push(a[i]);
      array2.push(b[i]);
    }
  }

  const arr2Str = array2.reverse().join("");
  const arr1Str = array1.join("");

  if (arr1Str === arr2Str) {
    return true;
  }

  return false;
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
