import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface BoardSize {
  rows: number;
  cols: number;
}

export interface BoardState extends BoardSize {
  isAlive: boolean;
  boardState: Record<string, boolean>;
}
