import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import "../../../__mocks__/intersectionObserverMock";
import Card from "./Card";

describe("Card", () => {
  it("renders correctly", () => {
    const container = render(
      <Card
        image={""}
        title={""}
        open={false}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        disable={false}
        delay={0}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
