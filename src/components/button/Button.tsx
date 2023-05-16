import styles from "./Button.module.scss";

interface Props {
  name: string;
  disabled?: boolean;
  onClick: () => void;
}

function Button({ name, disabled, onClick }: Props) {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
