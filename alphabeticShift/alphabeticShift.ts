export function alphabeticShift(inputString: string): string {
  return inputString.replace(/[a-z]/g, (character) => {
    if (character === "z") {
      return "a";
    }

    return String.fromCharCode(character.charCodeAt(0) + 1);
  });
}

console.log(alphabeticShift("crazy"));
