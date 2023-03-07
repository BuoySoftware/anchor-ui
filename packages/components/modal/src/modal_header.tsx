import { Box } from "@buoysoftware/anchor-layout";
import { Body } from "@buoysoftware/anchor-typography";

interface OwnProps {
  title: string;
}

export type ModalHeaderProps = OwnProps;

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
}): React.ReactElement => {
  return (
    <Box borderBottom="1SolidGray" py="xl" px="xxxl">
      <Body data-testid="modal-title" variant="subtitle">
        {title}
      </Body>
    </Box>
  );
};

export default ModalHeader;
