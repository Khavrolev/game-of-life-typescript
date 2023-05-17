import { isNumberOfBoard } from "../../../utils/utils";
import styles from "./Cell.module.scss";
import classNames from "classnames";

interface Props {
  selected: boolean;
  content: string;
  row: number;
  col: number;
}

function Cell({ selected, content, row, col }: Props) {
  const isCellInGame = !isNumberOfBoard(row, col);

  return (
    <div
      className={classNames(styles.cell, {
        [styles.cell_number]: !isCellInGame,
        [styles.cell_cell]: isCellInGame,
        [styles.cell_selected]: selected,
      })}
      data-row={row}
      data-col={col}
    >
      {content}
    </div>
  );
}

export default Cell;
