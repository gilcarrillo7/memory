import React from "react";
import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RenderOptions, render } from "@testing-library/react";

import { memorySlice } from "../features/memory/memorySlice";
import { uiSlice } from "../features/ui/uiSlice";
import { RootState, AppStore } from "../store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  memory: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { memory: memorySlice.reducer, ui: uiSlice.reducer },
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
