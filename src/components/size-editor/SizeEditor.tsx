import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changeBoardSize } from "../../store/boardSlice";
import Button from "../button/Button";
import styles from "./SizeEditor.module.scss";
import DimensionEditor from "./dimension-editor/DimensionEditor";

function SizeEditor() {
  const storeRows = useAppSelector((state) => state.rows);
  const storeCols = useAppSelector((state) => state.cols);
  const dispatch = useAppDispatch();

  const [rowsToSave, setRowsToSave] = useState(storeRows);
  const [colsToSave, setColsToSave] = useState(storeCols);
  const [isError, setIsError] = useState(false);

  return (
    <div className={styles["size-editor"]}>
      <DimensionEditor
        label={`Rows (${storeRows})`}
        value={rowsToSave}
        onChange={setRowsToSave}
        onError={setIsError}
      />
      <DimensionEditor
        label={`Cols (${storeCols})`}
        value={colsToSave}
        onChange={setColsToSave}
        onError={setIsError}
      />
      <Button
        name="Save"
        disabled={isError}
        onClick={() =>
          dispatch(changeBoardSize({ rows: rowsToSave, cols: colsToSave }))
        }
      />
    </div>
  );
}

export default SizeEditor;
