import Modal from "react-modal";
import { Button } from "@buoysoftware/anchor-button";

import { Modal as AnchorModal } from "../src/modal";
import { render } from "../test_utils";

// const MockModal: React.FC = (): React.ReactElement => {
//   return (
//     <AnchorModal
//       ariaHideApp={false}
//       isOpen={true}
//       modalActions={
//         <>
//           <Button onClick={jest.fn()} colorScheme="basic" mr="xxs">
//             Cancel
//           </Button>
//           <Button onClick={jest.fn()} colorScheme="primary">
//             Save
//           </Button>
//         </>
//       }
//       testId="test-modal"
//       title="Test Modal"
//     />
//   );
// };

describe("<Modal />", () => {
  it("renders correctly", async () => {
    const modal = render(
      <AnchorModal
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
      />
    );

    await setTimeout(() => {}, 1000);

    expect(modal.asFragment()).toMatchSnapshot();
  });
});
