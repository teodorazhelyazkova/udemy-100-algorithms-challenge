export function companyBotStrategy(trainingData: number[][]): number {
    const correctValues = trainingData
        .filter(([answerTime, correctness]) => correctness > 0)
        .map(([time]) => time);

    const totalCorrectValues = correctValues.reduce(
        (acc, time) => acc + time,
        0
    );

    return correctValues.length ? totalCorrectValues / correctValues.length : 0;
}

// console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
// console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
// console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
