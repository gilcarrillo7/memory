import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import fetch from "jest-fetch-mock";

import Header from "./Header";
import { renderWithProviders } from "../../utils/renderWithProviders";

describe("Header", () => {
  it("renders correctly", () => {
    const container = renderWithProviders(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("simulates selection", () => {
    const { getByLabelText } = renderWithProviders(<Header />);
    fireEvent.change(getByLabelText("Nivel"), {
      target: { value: "2" },
    });
    expect((getByLabelText("Nivel") as HTMLSelectElement).value).toBe("2");
  });
});
describe("Header", () => {
  beforeAll(() => {
    fetch.mockResponse(
      JSON.stringify({
        entries: [
          {
            meta: {
              name: "bear",
              slug: "bear",
              tags: [],
              type: "game",
              uuid: "a4452fe5-ca10-4b35-ad7a-62fc44c60d27",
              space: "animals",
              author: {},
              locale: "es",
              excerpt: "",
              private: false,
              targets: [],
              category: null,
              created_at: "2023-03-24T14:43:03.000-03:00",
              updated_at: "2023-06-30T08:42:48.000-04:00",
              published_at: "2023-06-30T08:42:48.000-04:00",
              unpublish_at: null,
              version_type: "current",
              category_name: null,
              category_slug: null,
              available_locales: ["es"],
            },
            fields: {
              image: {
                url: "https://cloud.modyocdn.com/uploads/f0753a4f-87b2-484d-aeb1-a22c3278cb50/original/bear.jpg",
                tags: [],
                uuid: "f0753a4f-87b2-484d-aeb1-a22c3278cb50",
                title: "Bear",
                alt_text: null,
                description: null,
                content_type: "image/jpeg",
              },
            },
          },
        ],
      })
    );
  });

  it("simulates selection", () => {
    const { getByLabelText } = renderWithProviders(<Header />);
    fireEvent.change(getByLabelText("Nivel"), {
      target: { value: "2" },
    });
    expect((getByLabelText("Nivel") as HTMLSelectElement).value).toBe("2");
  });
});
