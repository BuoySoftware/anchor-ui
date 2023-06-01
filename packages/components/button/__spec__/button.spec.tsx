import { render, screen, within } from "../test_utils";
import { Button } from "../src";

describe("<Button />", () => {
  it("renders a button of type 'button' by default", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveTextContent("Click me");
  });

  it("renders a button of type 'submit'", () => {
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveTextContent("Submit");
  });

  it("renders an anchor element", () => {
    const href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const { container } = render(
      <Button as="a" href={href}>
        Link
      </Button>
    );

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveTextContent("Link");
  });

  it("renders a Link component (like react-router)", () => {
    function Link(props: { to: string; children: React.ReactNode }) {
      return <a href={props.to}>{props.children}</a>;
    }
    const to = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    // Expects ts error when `to` prop is not passed (since it's required)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Button as={Link}>Link</Button>;

    const { container } = render(
      <Button as={Link} to={to}>
        Link
      </Button>
    );

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", to);
    expect(link).toHaveTextContent("Link");
  });

  it("renders a disabled button", () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders loading indicator", () => {
    render(<Button submitting>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).not.toHaveTextContent("Click me");
    expect(
      within(button).getByTestId("button-loading-indicator")
    ).toBeInTheDocument();
  });
});
