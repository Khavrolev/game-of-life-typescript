import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changeBoardSize, changeBoardState } from "../../store/boardSlice";
import Button from "../button/Button";
import styles from "./SizeEditor.module.scss";
import DimensionEditor from "./dimension-editor/DimensionEditor";
import { BoardSize } from "../../types/types";

function SizeEditor() {
  const isAlive = useAppSelector((state) => state.isAlive);
  const size = useAppSelector((state) => state.size);
  const { rows, cols } = size;
  const dispatch = useAppDispatch();

  const [newBoardSize, setNewBoardSize] = useState<BoardSize>({ rows, cols });
  const [hasError, setHasError] = useState(false);

  function handleSaveClick() {
    dispatch(
      changeBoardSize({
        rows: newBoardSize.rows,
        cols: newBoardSize.cols,
      })
    );

    dispatch(changeBoardState({}));
  }

  return (
    <div className={styles["size-editor"]}>
      <DimensionEditor
        label={`Rows (${rows})`}
        value={newBoardSize.rows}
        onChange={(value) => setNewBoardSize({ ...newBoardSize, rows: value })}
        onError={setHasError}
      />
      <DimensionEditor
        label={`Cols (${cols})`}
        value={newBoardSize.cols}
        onChange={(value) => setNewBoardSize({ ...newBoardSize, cols: value })}
        onError={setHasError}
      />
      <Button
        name="Save"
        disabled={isAlive || hasError}
        onClick={handleSaveClick}
      />
    </div>
  );
}

export default SizeEditor;
