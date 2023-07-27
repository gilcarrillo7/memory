import React from "react";
import "@testing-library/jest-dom";

import FinishMessage from "./FinishMessage";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("FinishMessage", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<FinishMessage />);
    expect(container).toMatchSnapshot();
  });
});
