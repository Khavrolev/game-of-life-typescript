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
  const { rows, cols, alive, boardState } = state;

  function renderBoard() {
    const board = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const key = getKeyFromRowAndCol(i, j);

        board.push(
          <Cell
            key={key}
            selected={boardState[key]}
            data-row={i}
            data-col={j}
          />
        );
      }
    }

    return board;
  }

  function handleClickOnBoard(event: MouseEvent<HTMLDivElement>) {
    if (alive || !(event.target instanceof HTMLElement)) {
      return;
    }

    const row = Number(event.target.dataset.row);
    const col = Number(event.target.dataset.col);

    if (isNaN(row) || isNaN(col)) {
      return;
    }

    const key = getKeyFromRowAndCol(row, col);
    dispatch(changeBoardState({ [key]: !boardState[key] }));
  }

  return (
    <div
      className={styles.board}
      style={{ "--cols": cols }}
      onClick={handleClickOnBoard}
    >
      {renderBoard()}
    </div>
  );
}

export default Board;
