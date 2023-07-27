import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import Register from "./Register";
import "../../../__mocks__/intersectionObserverMock";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("Register", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Register />);
    expect(container).toMatchSnapshot();
  });
  it("simulates input", () => {
    const { getByLabelText } = renderWithProviders(<Register />);
    fireEvent.change(getByLabelText("Ingresa tu nombre"), {
      target: { value: "Name" },
    });
    expect(
      (getByLabelText("Ingresa tu nombre") as HTMLSelectElement).value
    ).toBe("Name");
  });
  it("simulates submit", () => {
    const { getByText } = renderWithProviders(<Register />);
    fireEvent.click(getByText("Empezar"));
    expect(getByText("Por favor ingresa tu nombre")).toBeTruthy();
  });
});
