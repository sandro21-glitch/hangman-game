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
  health: number;
}

const initialState: HangmanState = {
  categories: data.categories,
  categoryNames: Object.keys(data.categories),
  activeCategory: [],
  usedChars: [],
  health: 100,
};
export const counterSlice = createSlice({
  name: "hangman",
  initialState,
  reducers: {
    setActiveCategoryList: (state, action: PayloadAction<string>) => {
      const categoryName = action.payload;
      const { categories } = state;

      if (categories.hasOwnProperty(categoryName)) {
        state.activeCategory = categories[categoryName];
      }
    },
    setActiveWord: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      if (index >= 0 && index < state.activeCategory.length) {
        state.activeCategory = state.activeCategory.map((category, i) => ({
          ...category,
          selected: i === index,
        }));
      }
    },
    setClickedChar: (state, action: PayloadAction<string>) => {
      state.usedChars.push(action.payload);
    },
    resetGame: (state) => {
      state.activeCategory = [];
      state.usedChars = [];
    },
  },
});

export const {
  setActiveCategoryList,
  setClickedChar,
  resetGame,
  setActiveWord,
} = counterSlice.actions;

export default counterSlice.reducer;
