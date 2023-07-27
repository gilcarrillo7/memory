import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface UiState {
  name: string;
  levels: number[];
  currentLevel: number;
}

const initialState: UiState = {
  name: (typeof window !== "undefined" && localStorage.getItem("name")) || "",
  levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  currentLevel: 20,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setCurrentLevel: (state, { payload }) => {
      state.currentLevel = payload;
    },
  },
});

export const { setName, setCurrentLevel } = uiSlice.actions;

export const selectName = (state: RootState) => state.ui.name;
export const selectCurrentLevel = (state: RootState) => state.ui.currentLevel;
export const selectLevels = (state: RootState) => state.ui.levels;

export default uiSlice.reducer;
