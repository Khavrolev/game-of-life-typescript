import styles from "./Control.module.scss";
import Button from "../button/Button";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changeAliveStatus, changeBoardState } from "../../store/boardSlice";
import { initBoard } from "../../utils/utils";
import { getNextStepState } from "../../utils/algorithm";

function Control() {
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state) => state);
  const { isAlive, state, size } = storeState;

  return (
    <div className={styles.control}>
      <Button
        name={isAlive ? "Stop" : "Start"}
        onClick={() => dispatch(changeAliveStatus())}
      />
      <Button
        name="Step"
        onClick={() =>
          dispatch(changeBoardState(getNextStepState(state, size)))
        }
        disabled={isAlive}
      />
      <Button
        name="Random init"
        onClick={() => dispatch(changeBoardState(initBoard(size)))}
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
