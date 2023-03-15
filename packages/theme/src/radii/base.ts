export const base = {
  acceptableWarning: "5px",
  banner: "5px",
  error: "4px",
  success: "4px",
  input: "4px",
  menu: "4px",
  modal: "8px",
  none: "0",
  pill: "40px",
  circle: "100%",
  tab: "4px 4px 0 0",
  verticalBullet: "3px",
  volumeCard: "5px",
};

export type Base = Record<keyof typeof base, string>;
