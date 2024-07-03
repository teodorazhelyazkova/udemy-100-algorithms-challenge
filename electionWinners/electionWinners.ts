export function electionsWinners(votes: number[], k: number): number {
    const maxVote = Math.max(...votes);
    const numOfCandidatesWithMaxVotes = votes.filter(
        (vote) => vote === maxVote
    ).length;

    if (numOfCandidatesWithMaxVotes > 1) {
        return 0;
    }

    let potentialWinners = 0;

    for (const vote of votes) {
        if (vote + k > maxVote) {
            potentialWinners++;
        }
    }

    return potentialWinners;
}

// console.log(electionsWinners([2, 3, 5, 2], 3));
