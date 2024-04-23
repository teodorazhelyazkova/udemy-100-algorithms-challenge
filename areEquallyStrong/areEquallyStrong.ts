export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourWeakest = Math.min(yourLeft, yourRight);
  const yourStrongest = Math.max(yourLeft, yourRight);
  const friendsWeakest = Math.min(friendsLeft, friendsRight);
  const friendsStrongest = Math.max(friendsLeft, friendsRight);

  return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
