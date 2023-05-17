import styles from "./Cell.module.scss";
import classNames from "classnames";

interface Props {
  selected: boolean;
}

function Cell({ selected, ...rest }: Props) {
  return (
    <div
      className={classNames(styles.cell, { [styles.cell_selected]: selected })}
      {...rest}
    />
  );
}

export default Cell;
