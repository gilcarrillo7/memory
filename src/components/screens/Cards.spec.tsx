import React from "react";
import "@testing-library/jest-dom";

import Cards from "./Cards";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("Button", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Cards />);
    expect(container).toMatchSnapshot();
  });
});
