import { TextButton } from "../src";
import { render, screen } from "../test_utils";

describe("<TextButton />", () => {
  it("renders a button by default", () => {
    render(<TextButton>Click me</TextButton>);

    expect(
      screen.getByText("Click me", { selector: "button" })
    ).toBeInTheDocument();
  });

  it("renders an anchor element", () => {
    const href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    render(
      <TextButton as="a" href={href}>
        Link
      </TextButton>
    );

    expect(screen.getByText("Link").closest("a")).toHaveAttribute("href", href);
  });
});
