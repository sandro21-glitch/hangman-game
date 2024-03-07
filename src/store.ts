import { configureStore } from "@reduxjs/toolkit";
import hangmanReducer from "./features/hangman/hangmanSlice";
export const store = configureStore({
  reducer: {
    game: hangmanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
