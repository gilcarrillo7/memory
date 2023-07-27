import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Select from "./Select";

describe("Select", () => {
  it("renders correctly", () => {
    const container = render(
      <Select
        label={""}
        options={[]}
        selected={0}
        onChange={(function (event: React.ChangeEvent<HTMLSelectElement>): void {
          throw new Error("Function not implemented.");
        })}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
