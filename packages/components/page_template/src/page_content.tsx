import { Box, BoxProps, Flex } from "@buoysoftware/anchor-layout";
import { LoadingIndicator } from "@buoysoftware/anchor-loading-indicator";
import { Body } from "@buoysoftware/anchor-typography";
import { useTranslation } from "react-i18next";

interface OwnProps {
  loading?: boolean;
}

type PageContentProps = OwnProps & Omit<BoxProps, "gridArea">;

export const PageContent: React.FC<PageContentProps> = ({
  children,
  loading,
  ...props
}): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Box
      gridArea="content"
      display={loading ? "grid" : "block"}
      mt="40px"
      px="page.gutterX"
      {...props}
    >
      {loading ? (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifySelf="center"
          alignSelf="center"
        >
          <LoadingIndicator strokeSize={2} size={40} color="grey70" />
          <Body color="text.secondary" mt="s" size="m">
            {t("loading")}
          </Body>
        </Flex>
      ) : (
        children
      )}
    </Box>
  );
};
