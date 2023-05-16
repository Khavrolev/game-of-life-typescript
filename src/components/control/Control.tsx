import styles from "./Control.module.scss";
import Button from "../button/Button";

function Control() {
  return (
    <div className={styles.control}>
      <Button name="Start" onClick={() => undefined} />
      <Button name="Step" onClick={() => undefined} />
      <Button name="Random init" onClick={() => undefined} />
      <Button name="Clear" onClick={() => undefined} />
    </div>
  );
}

export default Control;
