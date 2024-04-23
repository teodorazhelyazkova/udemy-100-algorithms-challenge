export function alternatingSums(a: number[]): number[] {
  let team1: number[] = [];
  let team2: number[] = [];

  a.forEach((weight, index) => {
    if (index % 2 === 0) {
      team1.push(weight);
    } else {
      team2.push(weight);
    }
  });

  return [
    team1.reduce((acc, currentValue) => acc + currentValue),
    team2.reduce((acc, currentValue) => acc + currentValue),
  ];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
