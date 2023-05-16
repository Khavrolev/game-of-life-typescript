import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface BoardSize {
  rows: number;
  cols: number;
}

export type BoardState = BoardSize;
