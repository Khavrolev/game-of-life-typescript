import styles from "./Control.module.scss";
import Button from "../button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changeAliveStatus, changeBoardState } from "../../store/boardSlice";

function Control() {
  const dispatch = useAppDispatch();
  const isAlive = useAppSelector((state) => state.isAlive);

  return (
    <div className={styles.control}>
      <Button
        name={isAlive ? "Stop" : "Start"}
        onClick={() => dispatch(changeAliveStatus())}
      />
      <Button name="Step" onClick={() => undefined} disabled={isAlive} />
      <Button name="Random init" onClick={() => undefined} disabled={isAlive} />
      <Button
        name="Clear"
        onClick={() => dispatch(changeBoardState({}))}
        disabled={isAlive}
      />
    </div>
  );
}

export default Control;
