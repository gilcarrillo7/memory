import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders correctly", () => {
    const container = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
