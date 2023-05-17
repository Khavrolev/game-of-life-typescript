import {
  FIRST_CELL_NUMBER,
  neighborsForAliveToBeAlive,
  neighborsForDeadToBeAlive,
} from "../constants/constants";
import { BoardSize } from "../types/types";
import { getKeyFromRowAndCol, getRowAndColFormKey } from "./utils";

function geNeighborCells(
  key: string,
  boardSize: BoardSize,
  hasKeyIncluded = true
) {
  const coordinates = getRowAndColFormKey(key);

  if (!coordinates) {
    return [];
  }

  const { row, col } = coordinates;
  const { rows, cols } = boardSize;
  const top = FIRST_CELL_NUMBER;
  const right = rows + FIRST_CELL_NUMBER - 1;
  const bottom = cols + FIRST_CELL_NUMBER - 1;
  const left = FIRST_CELL_NUMBER;

  const topRow = row - 1 < top ? bottom : row - 1;
  const bottomRow = row + 1 > bottom ? top : row + 1;
  const leftCol = col - 1 < left ? right : col - 1;
  const rightCol = col + 1 > right ? left : col + 1;

  return [
    ...(hasKeyIncluded ? [getKeyFromRowAndCol(row, col)] : []),
    getKeyFromRowAndCol(topRow, leftCol),
    getKeyFromRowAndCol(topRow, col),
    getKeyFromRowAndCol(topRow, rightCol),
    getKeyFromRowAndCol(row, rightCol),
    getKeyFromRowAndCol(bottomRow, rightCol),
    getKeyFromRowAndCol(bottomRow, col),
    getKeyFromRowAndCol(bottomRow, leftCol),
    getKeyFromRowAndCol(row, leftCol),
  ];
}

function getCellsForChecking(
  state: Record<string, boolean>,
  boardSize: BoardSize
) {
  const aliveCells = Object.keys(state).filter((key) => state[key]);

  const cellsForChecking = aliveCells.reduce((acc, key) => {
    acc.push(...geNeighborCells(key, boardSize));

    return acc;
  }, [] as string[]);

  return [...new Set(cellsForChecking)];
}

function countAliveNeighbors(
  state: Record<string, boolean>,
  boardSize: BoardSize,
  key: string
) {
  const neighbors = geNeighborCells(key, boardSize, false);

  return neighbors.filter((neighbor) => state[neighbor]).length;
}

export function getNextStepState(
  state: Record<string, boolean>,
  boardSize: BoardSize
) {
  const cellsForChecking = getCellsForChecking(state, boardSize);

  const newState = cellsForChecking.reduce((acc, key) => {
    const aliveNeighbors = countAliveNeighbors(state, boardSize, key);

    const neighborsToBeAlive = state[key]
      ? neighborsForAliveToBeAlive
      : neighborsForDeadToBeAlive;

    if (neighborsToBeAlive.includes(aliveNeighbors)) {
      acc[key] = true;
    }

    return acc;
  }, {} as Record<string, boolean>);

  return newState;
}
