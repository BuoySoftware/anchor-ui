import { render } from "@testing-library/react";

import { Actor } from "../src/actor";

describe("<Actor />", () => {
  it("renders an abbreviated name", () => {
    const actor = {
      firstName: "Elaine",
      lastName: "Benes",
    };
    const { getByTestId } = render(<Actor actor={actor} />);

    expect(getByTestId("actor")).toHaveTextContent("Elaine B.");
  });
});
