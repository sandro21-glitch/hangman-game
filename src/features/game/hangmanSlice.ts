import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../../data.json";

export interface HangmanState {
  categories: {
    [key: string]: {
      name: string;
      selected: boolean;
    }[];
  };
  categoryNames: string[];
  activeCategory: { name: string; selected: boolean }[];
  usedChars: string[];
}

const initialState: HangmanState = {
  categories: data.categories,
  categoryNames: Object.keys(data.categories),
  activeCategory: [],
  usedChars: [],
};
export const counterSlice = createSlice({
  name: "hangman",
  initialState,
  reducers: {
    setActiveCategoryList: (state, action: PayloadAction<string>) => {
      const categoryName = action.payload;
      const { categories } = state;

      // check if categoryName is a key in categories
      if (categories.hasOwnProperty(categoryName)) {
        state.activeCategory = categories[categoryName].map((item) => ({
          name: item.name,
          selected: item.selected,
        }));
      }
    },
    setClickedChar: (state, action: PayloadAction<string>) => {
      state.usedChars.push(action.payload);
    },
  },
});

export const { setActiveCategoryList, setClickedChar } = counterSlice.actions;

export default counterSlice.reducer;
