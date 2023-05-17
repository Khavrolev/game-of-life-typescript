export function getKeyFromRowAndCol(row: number, col: number) {
  return `${row}-${col}`;
}

export function isNumberOfBoard(row: number, col: number) {
  return row < 0 || col < 0;
}

export function initBoard(rows: number, cols: number) {
  const state: Record<string, boolean> = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const key = getKeyFromRowAndCol(i, j);
      state[key] = Math.random() < 0.5;
    }
  }

  return state;
}
