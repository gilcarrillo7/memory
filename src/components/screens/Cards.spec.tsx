import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import Cards from "./Cards";
import { memorySlice } from "../../features/memory/memorySlice";

const renderWithProviders = (
  memory: React.JSX.Element,
  {
    preloadedState = { memory: { cards: [] } },
    store = configureStore({
      reducer: { memory: memorySlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(memory, { wrapper: Wrapper, ...renderOptions }) };
};

describe("Button", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Cards />);
    expect(container).toMatchSnapshot();
  });
});
