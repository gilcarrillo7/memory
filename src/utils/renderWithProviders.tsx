import React from "react";
import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RenderOptions, render } from "@testing-library/react";

import memorySlice from "../features/memory/memorySlice";
import uiSlice from "../features/ui/uiSlice";
import { RootState, AppStore } from "../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  memory: React.ReactElement,
  {
    preloadedState = {
      ui: {
        name: "Player",
        levels: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
        currentLevel: 20,
      },
      memory: {
        status: "idle",
        error: null,
        cards: [{ url: "", title: "dog", open: false, index: 1 }],
        wins: 0,
        errors: 0,
        firstCard: null,
        secondCard: null,
        total: 0,
        finished: false,
      },
    },
    store = configureStore({
      reducer: { memory: memorySlice, ui: uiSlice },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(memory, { wrapper: Wrapper, ...renderOptions }) };
};
