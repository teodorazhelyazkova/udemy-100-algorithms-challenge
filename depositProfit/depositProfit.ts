export function depositProfit(
    deposit: number,
    rate: number,
    threshold: number
): number {
    const annualGrowthRateDecimal = rate / 100;
    let years = 0;
    let totalBalance = deposit;

    while (totalBalance < threshold) {
        totalBalance += totalBalance * annualGrowthRateDecimal;
        years++;
    }

    return years;
}

// console.log(depositProfit(100, 20, 170))
