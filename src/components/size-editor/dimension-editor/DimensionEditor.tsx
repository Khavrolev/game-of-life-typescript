import {
  MAX_ROWS_COLS_QUANTITY,
  MIN_ROWS_COLS_QUANTITY,
} from "../../../constants/constants";
import styles from "./DimensionEditor.module.scss";

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
  onError: (value: boolean) => void;
}

function DimensionEditor({ label, value, onChange, onError }: Props) {
  function handleDimensionEditor(value: number) {
    onError(value < MIN_ROWS_COLS_QUANTITY || value > MAX_ROWS_COLS_QUANTITY);
    onChange(value);
  }

  return (
    <div className={styles["dimension-editor"]}>
      <label htmlFor={label} className={styles["dimension-editor__label"]}>
        {`${label}:`}
      </label>
      <input
        id={label}
        type="number"
        className={styles["dimension-editor__input"]}
        value={value}
        onChange={(event) => handleDimensionEditor(Number(event.target.value))}
      />
    </div>
  );
}

export default DimensionEditor;
