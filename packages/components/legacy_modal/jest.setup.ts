import ReactModal from "react-modal";
import "@testing-library/jest-dom";
import "jest-styled-components";

jest.spyOn(ReactModal, "setAppElement").mockImplementation(() => undefined);
