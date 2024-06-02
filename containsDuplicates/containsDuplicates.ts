export function containsDuplicates(a: number[]): boolean {
    if (a.length <= 1) {
        return false;
    }

    const set: Set<number> = new Set<number>();

    for (const num of a) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

// console.log(containsDuplicates([1, 2, 3, 1]));
// console.log(containsDuplicates([3, 1]));
