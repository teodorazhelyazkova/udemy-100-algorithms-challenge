export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const chessboard: Record<string, number> = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const [bishopX, bishopY] = [chessboard[bishop[0]], parseInt(bishop[1])];
  const [pawnX, pawnY] = [chessboard[pawn[0]], parseInt(pawn[1])];

  return (
    bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === bishopY + pawnX
  );
}

// console.log(bishopAndPawn('a1', 'c3'));
