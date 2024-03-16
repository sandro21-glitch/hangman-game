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
  win: boolean;
  music: boolean;
}

const initialState: HangmanState = {
  categories: data.categories,
  categoryNames: Object.keys(data.categories),
  activeCategory: [],
  usedChars: [],
  health: 100,
  win: false,
  music: false,
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
      const char = action.payload.toLowerCase();
      const activeWord = state.activeCategory.find(
        (active) => active.selected === true
      );

      if (activeWord) {
        const activeWordChars = activeWord.name.toLowerCase().split("");
        if (!activeWordChars.includes(char)) {
          state.health -= 12.5;
        }
        state.usedChars.push(action.payload);
      }
    },
    resetGame: (state) => {
      state.activeCategory = [];
      state.usedChars = [];
      state.health = 100;
      state.win = false;
    },
    resetHealth: (state) => {
      state.health = 100;
      state.usedChars = [];
      state.win = false;
    },
    checkWin: (state) => {
      const { usedChars, activeCategory } = state;
      const selectedWord = activeCategory.find((word) => word.selected);

      if (selectedWord) {
        let selectedWordChars = selectedWord.name.split("");
        // remove empty strings from selectedWordChars
        selectedWordChars = selectedWordChars.filter(
          (char) => char.trim() !== ""
        );

        const isAllCharsFound = selectedWordChars.every((char) =>
          usedChars.some(
            (usedChar) => usedChar.toLowerCase() === char.toLowerCase()
          )
        );
        state.win = isAllCharsFound;
      }
    },
    toggleMusic: (state, action: PayloadAction<boolean>) => {
      state.music = action.payload;
    },
  },
});

export const {
  setActiveCategoryList,
  setClickedChar,
  resetGame,
  setActiveWord,
  resetHealth,
  checkWin,
  toggleMusic,
} = counterSlice.actions;

export default counterSlice.reducer;
