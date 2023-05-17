import { MouseEvent } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./Board.module.scss";
import Cell from "./cell/Cell";
import { filterRowAndCol, getKeyFromRowAndCol } from "../../utils/utils";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeAliveStatus, changeBoardState } from "../../store/boardSlice";
import {
  DELAY_BETWEEN_STEPS,
  FIRST_CELL_NUMBER,
} from "../../constants/constants";
import { useInterval } from "react-use";
import { getNextStepState } from "../../utils/algorithm";

declare module "csstype" {
  interface Properties {
    "--cols"?: number;
  }
}

function Board() {
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state) => state);
  const { isAlive, state, size } = storeState;
  const { rows, cols } = size;

  useInterval(
    () => {
      if (!Object.keys(state).length) {
        dispatch(changeAliveStatus());
        return alert("Game over!");
      }

      dispatch(changeBoardState(getNextStepState(state, size)));
    },
    isAlive ? DELAY_BETWEEN_STEPS : null
  );

  function handleClickOnBoard(event: MouseEvent<HTMLDivElement>) {
    if (isAlive || !(event.target instanceof HTMLElement)) {
      return;
    }

    const coordinates = filterRowAndCol(
      event.target.dataset.row,
      event.target.dataset.col
    );

    if (!coordinates) {
      return;
    }

    const { row, col } = coordinates;

    const key = getKeyFromRowAndCol(row, col);
    dispatch(changeBoardState({ ...state, [key]: !state[key] }));
  }

  function renderBoard() {
    const board = [];

    for (let i = FIRST_CELL_NUMBER - 1; i < rows + FIRST_CELL_NUMBER; i++) {
      for (let j = FIRST_CELL_NUMBER - 1; j < cols + FIRST_CELL_NUMBER; j++) {
        const key = getKeyFromRowAndCol(i, j);

        board.push(
          <Cell
            key={key}
            selected={state[key]}
            content={getCellContent(i, j)}
            row={i}
            col={j}
          />
        );
      }
    }

    function getCellContent(row: number, col: number) {
      if (col === FIRST_CELL_NUMBER - 1 && row !== FIRST_CELL_NUMBER - 1) {
        return `${row}`;
      }

      if (row === FIRST_CELL_NUMBER - 1 && col !== FIRST_CELL_NUMBER - 1) {
        return `${col}`;
      }

      return "";
    }

    return board;
  }

  return (
    <div
      className={styles.board}
      style={{ "--cols": cols + 1 }}
      onClick={handleClickOnBoard}
    >
      {renderBoard()}
    </div>
  );
}

export default Board;
