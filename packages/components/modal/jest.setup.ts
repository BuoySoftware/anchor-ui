import "@testing-library/jest-dom";
import "jest-styled-components";

jest.mock("react-modal", () => {
  const actual = jest.requireActual("react-modal");

  return {
    ...actual,
    setAppElement: (args: string) => {
      try {
        actual.setAppElement(args);
      } catch {
        console.warn(args, "Is not in DOM");
      }
    },
  };
});
// jest.spyOn(ReactModal, "setAppElement").mockImplementation(() => undefined);
