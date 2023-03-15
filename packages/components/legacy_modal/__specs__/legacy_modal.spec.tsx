import { Button } from "@buoysoftware/anchor-button";

import {
  LegacyModal,
  LegacyModalActions,
  LegacyModalContent,
  LegacyModalHeader,
} from "../src";
import { render } from "../test_utils";

const MockLegacyModal: React.FC = (): React.ReactElement => {
  return (
    <LegacyModal ariaHideApp={false} isOpen={true} testId="test-legacy-modal">
      <LegacyModalHeader title="Test Legacy Modal" />
      <LegacyModalContent>Test modal contents</LegacyModalContent>
      <LegacyModalActions>
        <Button onClick={jest.fn()} colorScheme="basic" mr="xxs">
          Cancel
        </Button>
        <Button onClick={jest.fn()} colorScheme="primary">
          Save
        </Button>
      </LegacyModalActions>
    </LegacyModal>
  );
};

describe("<Modal />", () => {
  it("renders correctly", () => {
    const modal = render(<MockLegacyModal />);

    expect(modal.baseElement).toMatchSnapshot();
  });
});
