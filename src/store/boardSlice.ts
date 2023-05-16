import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardSize, BoardState } from "../types/types";

const initialState: BoardState = {
  rows: 50,
  cols: 50,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeBoardSize(state, action: PayloadAction<BoardSize>) {
      state.rows = action.payload.rows;
      state.cols = action.payload.cols;
    },
  },
});

export default boardSlice.reducer;
export const { changeBoardSize } = boardSlice.actions;
