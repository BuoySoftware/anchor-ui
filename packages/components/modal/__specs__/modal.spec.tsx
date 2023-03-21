import { Button } from "@buoysoftware/anchor-button";

import { Modal } from "../src/modal";
import { render } from "../test_utils";

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
});
