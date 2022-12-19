const baseFontStyles = {
  italic: "italic",
  normal: "normal",
};

export const base = {
  ...baseFontStyles,
};

export type Base = Record<keyof typeof base, string>;
