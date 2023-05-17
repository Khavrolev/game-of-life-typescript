import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardSize, BoardState } from "../types/types";

const initialState: BoardState = {
  rows: 50,
  cols: 50,
  isAlive: false,
  boardState: {},
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeBoardSize(state, action: PayloadAction<BoardSize>) {
      state.rows = action.payload.rows;
      state.cols = action.payload.cols;
    },
    changeAliveStatus(state) {
      state.isAlive = !state.isAlive;
    },
    changeBoardState(state, action: PayloadAction<Record<string, boolean>>) {
      state.boardState = action.payload;
    },
  },
});

export default boardSlice.reducer;
export const { changeBoardSize, changeAliveStatus, changeBoardState } =
  boardSlice.actions;
