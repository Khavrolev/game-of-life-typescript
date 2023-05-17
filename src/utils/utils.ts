export function getKeyFromRowAndCol(row: number, col: number) {
  return `${row}-${col}`;
}

export function isNumberOfBoard(row: number, col: number) {
  return row < 0 || col < 0;
}
