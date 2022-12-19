export const base = {
  "full-size-kana": "full-size-kana",
  "full-width": "full-width",
  capitalize: "capitalize",
  lowercase: "lowercase",
  none: "none",
  uppercase: "uppercase",
};

export type Base = Record<keyof typeof base, string>;
