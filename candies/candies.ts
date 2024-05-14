export function candies(n: number, m: number): number {
    const candies = m;
    const children = n;

    if (children > candies) {
        return 0;
    } else {
        const candiesPerChild = Math.trunc(candies / children);

        return candiesPerChild * children;
    }
}

// console.log(candies(3, 10));
