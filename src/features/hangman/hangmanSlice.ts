import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'
import data from "./../../data.json";

export interface HangmanState {
  categories: {
    [key: string]: {
      name: string;
      selected: boolean;
    }[];
  };
}

const initialState: HangmanState = {
  categories: data.categories || {},
};
export const counterSlice = createSlice({
  name: "hangman",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
