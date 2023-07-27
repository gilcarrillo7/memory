import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const container = render(<Button>Texto</Button>);
    expect(container).toMatchSnapshot();
  });
});
