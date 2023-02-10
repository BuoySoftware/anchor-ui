import React from "react";
import kebabCase from "lodash/kebabCase";

import { StyledTextArea, StyledTextAreaProps } from "./styled_text_area";

export type TextAreaProps = Omit<StyledTextAreaProps, "theme">;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, name, id, ...props }, forwardRef): React.ReactElement => {
    return (
      <StyledTextArea
        aria-describedby={error && name ? `error-${id}` : undefined}
        aria-errormessage={error ? `error-${id}` : undefined}
        aria-invalid={error}
        data-testid={`text-area-${kebabCase(name)}`}
        error={error}
        id={id}
        name={name}
        ref={forwardRef}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
