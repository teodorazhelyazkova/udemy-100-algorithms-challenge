export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return inputArray.map((element) =>
    element === elemToReplace ? substitutionElem : element
  );
}

// console.log(arrayReplace([1, 2, 1], 1, 3));
