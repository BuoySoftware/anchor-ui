import { render, waitFor } from "../test_utils";
import { Search } from "iconoir-react";
import { theme } from "@buoysoftware/anchor-theme";

import { Input } from "../src";

describe("<Input />", () => {
  it("renders properly", () => {
    const { asFragment } = render(<Input id="example" name="example" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a disabled input properly", () => {
    const { asFragment } = render(
      <Input id="example" disabled={true} name="example" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  context("unit", () => {
    it("renders a unit properly", () => {
      const { asFragment } = render(
        <Input id="example" unit="mL" name="example" />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("does not apply any spacing", () => {
      const { getByTestId } = render(
        <Input id="example" unit="mL" name="example" />
      );

      expect(getByTestId("input-unit")).toHaveStyleRule("margin-right", "0rem");
    });
  });

  context("prefix unit", () => {
    it("renders a prefix unit properly", () => {
      const { asFragment } = render(
        <Input id="example" unit="$" prefixUnit={true} name="example" />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("spaces the prefix unit properly", () => {
      const { getByTestId } = render(
        <Input id="example" unit="$" prefixUnit={true} name="example" />
      );

      expect(getByTestId("input-unit")).toHaveStyleRule(
        "margin-right",
        theme.space.xs
      );
    });
  });

  context("input with error", () => {
    it("applies a critical border", () => {
      const { getByTestId } = render(
        <Input id="example" error={true} name="example" />
      );

      expect(getByTestId("input-wrapper-example")).toHaveStyleRule(
        "border-color",
        theme.colors.border.critical
      );
    });
  });

  it("renders a readOnly input properly", () => {
    const { asFragment } = render(
      <Input id="example" readOnly={true} name="example" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with an icon properly", () => {
    const { asFragment } = render(
      <Input id="example" icon={<Search />} name="example" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a focus state properly", async () => {
    const { getByTestId, asFragment } = render(
      <Input id="example" name="example" />
    );

    await waitFor(() => getByTestId("input-example").focus());

    expect(asFragment()).toMatchSnapshot();
  });

  it("supports a custom onFocus callback", async () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(
      <Input id="example" name="example" onFocus={onFocus} />
    );

    await waitFor(() => getByTestId("input-example").focus());

    expect(onFocus).toHaveBeenCalled();
  });
});
