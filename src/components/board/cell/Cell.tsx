import { isCellOnBoard } from "../../../utils/utils";
import styles from "./Cell.module.scss";
import classNames from "classnames";

interface Props {
  content: string;
  row: number;
  col: number;
  isSelected: boolean;
}

function Cell({ content, row, col, isSelected }: Props) {
  const isCellInGame = isCellOnBoard(row, col);

  return (
    <div
      className={classNames(styles.cell, {
        [styles.cell_number]: !isCellInGame,
        [styles.cell_cell]: isCellInGame,
        [styles.cell_selected]: isSelected,
      })}
      data-row={row}
      data-col={col}
    >
      {content}
    </div>
  );
}

export default Cell;
