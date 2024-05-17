export function checkPalindrome(inputString: string): boolean {
    // Define regex to remove non-alphanumeric characters
    const regex = /[^A-Za-z0-9]/g;

    // Normalize the input string
    const normalizedString = inputString.toLowerCase().replace(regex, '');
    const length = normalizedString.length;

    // Check if the string is a palindrome
    for (let i = 0; i < length / 2; i++) {
        if (normalizedString[i] !== normalizedString[length - 1 - i]) {
            return false;
        }
    }

    return true;
}

// console.log(checkPalindrome('aabaa'));
// console.log(checkPalindrome('abac'));
// console.log(checkPalindrome('a'));
