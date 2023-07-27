import React from "react";
import "@testing-library/jest-dom";

import Layout from "./Layout";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("Layout", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Layout>Hello</Layout>);
    expect(container).toMatchSnapshot();
  });
});
