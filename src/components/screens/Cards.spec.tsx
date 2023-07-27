import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import "../../../__mocks__/intersectionObserverMock";

import Cards from "./Cards";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("Button", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Cards />);
    expect(container).toMatchSnapshot();
  });
  it("simulates a click on a card", () => {
    const { getByText } = renderWithProviders(<Cards />);
    fireEvent.click(getByText("?"));
    expect(getByText("?").parentNode?.parentNode?.parentNode).toHaveClass(
      "pointer-events-none "
    );
  });
});
