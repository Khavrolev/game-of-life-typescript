import { MouseEvent } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./Board.module.scss";
import Cell from "./cell/Cell";
import { getKeyFromRowAndCol } from "../../utils/utils";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeBoardState } from "../../store/boardSlice";

declare module "csstype" {
  interface Properties {
    "--cols"?: number;
  }
}

function Board() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const { rows, cols, isAlive, boardState } = state;

  function handleClickOnBoard(event: MouseEvent<HTMLDivElement>) {
    if (isAlive || !(event.target instanceof HTMLElement)) {
      return;
    }

    const row = Number(event.target.dataset.row);
    const col = Number(event.target.dataset.col);

    if (isNaN(row) || isNaN(col) || row < 0 || col < 0) {
      return;
    }

    const key = getKeyFromRowAndCol(row, col);
    dispatch(changeBoardState({ ...boardState, [key]: !boardState[key] }));
  }

  function renderBoard() {
    const board = [];

    for (let i = -1; i < rows; i++) {
      for (let j = -1; j < cols; j++) {
        const key = getKeyFromRowAndCol(i, j);

        board.push(
          <Cell
            key={key}
            selected={boardState[key]}
            content={getCellContent(i, j)}
            row={i}
            col={j}
          />
        );
      }
    }

    function getCellContent(row: number, col: number) {
      if (col === -1 && row !== -1) {
        return `${row + 1}`;
      }

      if (row === -1 && col !== -1) {
        return `${col + 1}`;
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
