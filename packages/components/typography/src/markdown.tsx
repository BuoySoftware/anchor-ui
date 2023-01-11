import ReactMarkdown, { Options } from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Text } from "./text";

interface OwnProps {
  renderHtml?: boolean;
}

type MarkdownProps = Options & OwnProps;

export const Markdown: React.FC<MarkdownProps> = ({
  renderHtml = false,
  ...props
}): React.ReactElement => {
  let rehypePlugins: Array<any>;
  if (renderHtml === true) {
    rehypePlugins = [rehypeRaw];
  } else {
    rehypePlugins = [];
  }

  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <Text as="p">{children}</Text>,
        strong: ({ children }) => (
          <Text as="strong" fontWeight="bold">
            {children}
          </Text>
        ),
        em: ({ children }) => (
          <Text as="em" fontStyle="italic">
            {children}
          </Text>
        ),
      }}
      rehypePlugins={rehypePlugins}
      {...props}
    />
  );
};
