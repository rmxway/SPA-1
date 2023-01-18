export type IcofontId =
  | "arrow-down"
  | "arrow-up";

export type IcofontKey =
  | "ArrowDown"
  | "ArrowUp";

export enum Icofont {
  ArrowDown = "arrow-down",
  ArrowUp = "arrow-up",
}

export const ICOFONT_CODEPOINTS: { [key in Icofont]: string } = {
  [Icofont.ArrowDown]: "61697",
  [Icofont.ArrowUp]: "61698",
};
