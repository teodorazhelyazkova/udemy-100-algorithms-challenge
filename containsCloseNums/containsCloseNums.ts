export function containsCloseNums(nums: number[], k: number): boolean {
    const numsIndices: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in numsIndices && i - numsIndices[nums[i]] <= k) {
            return true;
        }
        numsIndices[nums[i]] = i;
    }

    return false;
}

// console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
// console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
