import React from "react";
import "@testing-library/jest-dom";

import "../../../__mocks__/intersectionObserverMock";
import Game from "./Game";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("Game", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Game />);
    expect(container).toMatchSnapshot();
  });
});
