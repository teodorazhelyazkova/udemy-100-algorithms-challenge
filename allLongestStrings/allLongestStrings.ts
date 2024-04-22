export function allLongestStrings(inputArray: string[]): string[] {
  let maxLength = 0;
  const longestStrings: string[] = [];

  inputArray.forEach((string) => {
    if (string.length > maxLength) {
      maxLength = string.length;
      longestStrings.splice(0);
      longestStrings.push(string);
    } else if (string.length === maxLength) {
      longestStrings.push(string);
    }
  });

  return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
