import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./Board.module.scss";
import Cell from "./cell/Cell";

declare module "csstype" {
  interface Properties {
    "--cols"?: number;
  }
}

function Board() {
  const rows = useAppSelector((state) => state.rows);
  const cols = useAppSelector((state) => state.cols);

  function renderBoard() {
    const board = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        board.push(<Cell />);
      }
    }

    return board;
  }

  return (
    <div className={styles.board} style={{ "--cols": cols }}>
      {renderBoard()}
    </div>
  );
}

export default Board;
