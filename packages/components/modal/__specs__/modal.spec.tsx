import { Button } from "@buoysoftware/anchor-button";

import { Modal } from "../src/modal";
import { act, render, waitFor } from "../test_utils";

const mockCloseModal = jest.fn();
const MockModal: React.FC = (): React.ReactElement => {
  return (
    <Modal
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
      onRequestClose={mockCloseModal}
      testId="test-modal"
      title="Test Modal"
    >
      Test modal contents
    </Modal>
  );
};

describe("<Modal />", () => {
  it("renders correctly", () => {
    const modal = render(<MockModal />);

    expect(modal.baseElement).toMatchSnapshot();
  });

  context("x button", () => {
    it("closes the modal", async () => {
      const { user, getByRole } = render(<MockModal />);

      act(() => {
        user.click(getByRole("button", { name: "Close Button" }));
      });

      waitFor(() => {
        expect(mockCloseModal).toHaveBeenCalled();
      });
    });
  });
});
