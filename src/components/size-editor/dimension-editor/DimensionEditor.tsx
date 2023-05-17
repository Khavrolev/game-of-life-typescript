import styles from "./DimensionEditor.module.scss";

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

function DimensionEditor({ label, value, onChange }: Props) {
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
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}

export default DimensionEditor;
