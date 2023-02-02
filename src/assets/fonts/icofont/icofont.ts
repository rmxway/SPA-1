export type IcofontId =
  | "arrow-down"
  | "arrow-up"
  | "cart"
  | "times-small";

export type IcofontKey =
  | "ArrowDown"
  | "ArrowUp"
  | "Cart"
  | "TimesSmall";

export enum Icofont {
  ArrowDown = "arrow-down",
  ArrowUp = "arrow-up",
  Cart = "cart",
  TimesSmall = "times-small",
}

export const ICOFONT_CODEPOINTS: { [key in Icofont]: string } = {
  [Icofont.ArrowDown]: "61697",
  [Icofont.ArrowUp]: "61698",
  [Icofont.Cart]: "61699",
  [Icofont.TimesSmall]: "61700",
};
