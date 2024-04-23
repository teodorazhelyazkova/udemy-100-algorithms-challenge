export function alphabetSubsequence(s: string): boolean {
  let isSubsequence = true;

  for (let i = 1; i < s.length; i++) {
    if (s.charCodeAt(i) <= s.charCodeAt(i - 1)) {
      isSubsequence = false;
    }
  }

  return isSubsequence;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
