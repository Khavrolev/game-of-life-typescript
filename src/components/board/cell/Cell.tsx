import styles from "./Cell.module.scss";
import classNames from "classnames";

function Cell() {
  return (
    <div
      className={classNames(styles.cell, { [styles["cell_selected"]]: true })}
    />
  );
}

export default Cell;
