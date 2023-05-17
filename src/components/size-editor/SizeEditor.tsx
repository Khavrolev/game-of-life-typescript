import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changeBoardSize } from "../../store/boardSlice";
import Button from "../button/Button";
import styles from "./SizeEditor.module.scss";
import DimensionEditor from "./dimension-editor/DimensionEditor";
import { BoardSize } from "../../types/types";

function SizeEditor() {
  const rows = useAppSelector((state) => state.rows);
  const cols = useAppSelector((state) => state.cols);
  const dispatch = useAppDispatch();

  const [boardSize, setBoardSize] = useState<BoardSize>({ rows, cols });
  const [hasError, setHasError] = useState(false);

  return (
    <div className={styles["size-editor"]}>
      <DimensionEditor
        label={`Rows (${rows})`}
        value={boardSize.rows}
        onChange={(value) => setBoardSize({ ...boardSize, rows: value })}
        onError={setHasError}
      />
      <DimensionEditor
        label={`Cols (${cols})`}
        value={boardSize.cols}
        onChange={(value) => setBoardSize({ ...boardSize, cols: value })}
        onError={setHasError}
      />
      <Button
        name="Save"
        disabled={hasError}
        onClick={() =>
          dispatch(
            changeBoardSize({ rows: boardSize.rows, cols: boardSize.cols })
          )
        }
      />
    </div>
  );
}

export default SizeEditor;
