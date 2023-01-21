export type IcofontId =
  | "arrow-down"
  | "arrow-up"
  | "cart";

export type IcofontKey =
  | "ArrowDown"
  | "ArrowUp"
  | "Cart";

export enum Icofont {
  ArrowDown = "arrow-down",
  ArrowUp = "arrow-up",
  Cart = "cart",
}

export const ICOFONT_CODEPOINTS: { [key in Icofont]: string } = {
  [Icofont.ArrowDown]: "61697",
  [Icofont.ArrowUp]: "61698",
  [Icofont.Cart]: "61699",
};
