import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BoardSize, BoardState } from "../types/types";

const initialState: BoardState = {
  isAlive: false,
  state: {},
  size: { rows: 50, cols: 50 },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeBoardSize(state, action: PayloadAction<BoardSize>) {
      state.size = action.payload;
    },
    changeAliveStatus(state) {
      state.isAlive = !state.isAlive;
    },
    changeBoardState(state, action: PayloadAction<Record<string, boolean>>) {
      state.state = action.payload;
    },
  },
});

export default boardSlice.reducer;
export const { changeBoardSize, changeAliveStatus, changeBoardState } =
  boardSlice.actions;
