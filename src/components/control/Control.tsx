import styles from "./Control.module.scss";
import Button from "../button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changeAliveStatus, changeBoardState } from "../../store/boardSlice";
import { initBoard } from "../../utils/utils";

function Control() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector((state) => state.rows);
  const cols = useAppSelector((state) => state.cols);
  const isAlive = useAppSelector((state) => state.isAlive);

  return (
    <div className={styles.control}>
      <Button
        name={isAlive ? "Stop" : "Start"}
        onClick={() => dispatch(changeAliveStatus())}
      />
      <Button name="Step" onClick={() => undefined} disabled={isAlive} />
      <Button
        name="Random init"
        onClick={() => dispatch(changeBoardState(initBoard(rows, cols)))}
        disabled={isAlive}
      />
      <Button
        name="Clear"
        onClick={() => dispatch(changeBoardState({}))}
        disabled={isAlive}
      />
    </div>
  );
}

export default Control;
