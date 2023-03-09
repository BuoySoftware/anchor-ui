import { Button } from "@buoysoftware/anchor-button";

import { Modal } from "../src/modal";
import { render } from "../test_utils";

describe("<Modal />", () => {
  it("renders correctly", () => {
    const modal = render(
      <Modal
        ariaHideApp={false}
        isOpen={true}
        modalActions={
          <>
            <Button onClick={jest.fn()} colorScheme="basic" mr="xxs">
              Cancel
            </Button>
            <Button onClick={jest.fn()} colorScheme="primary">
              Save
            </Button>
          </>
        }
        onRequestClose={jest.fn()}
        testId="test-modal"
        title="Test Modal"
      />
    );

    expect(modal.asFragment()).toMatchSnapshot();
  });
});
