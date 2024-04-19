export function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);

  const borderedPicture = [wall, ...picture.map((line) => `*${line}*`), wall];

  return borderedPicture;
}

// console.log(addBorder(["abc", "ded"]));
