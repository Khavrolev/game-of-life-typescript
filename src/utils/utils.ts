import { FIRST_CELL_NUMBER, KEY_SEPARATOR } from "../constants/constants";
import { BoardSize } from "../types/types";

export function getKeyFromRowAndCol(row: number, col: number) {
  return `${row}${KEY_SEPARATOR}${col}`;
}

export function getRowAndColFormKey(key: string) {
  const arr = key.split(KEY_SEPARATOR);

  return filterRowAndCol(arr[0], arr[1]);
}

export function filterRowAndCol(rowString?: string, colString?: string) {
  const row = Number(rowString);
  const col = Number(colString);

  if (
    isNaN(row) ||
    isNaN(col) ||
    row < FIRST_CELL_NUMBER ||
    col < FIRST_CELL_NUMBER
  ) {
    return;
  }

  return { row, col };
}

export function isNumberOfBoard(row: number, col: number) {
  return row < FIRST_CELL_NUMBER || col < FIRST_CELL_NUMBER;
}

export function initBoard(size: BoardSize) {
  const { rows, cols } = size;

  const state: Record<string, boolean> = {};

  for (let i = FIRST_CELL_NUMBER; i < rows + FIRST_CELL_NUMBER; i++) {
    for (let j = FIRST_CELL_NUMBER; j < cols + FIRST_CELL_NUMBER; j++) {
      const key = getKeyFromRowAndCol(i, j);
      state[key] = Math.random() < 0.5;
    }
  }

  return state;
}
