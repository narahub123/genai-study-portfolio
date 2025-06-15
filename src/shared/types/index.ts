interface IHeader {
  title: string;
  header: string;
  expl: string;
}

interface ICardLink {
  path: string;
  src: string;
  title: string;
  date: string;
}

import type {
  FontSizeToken,
  SizeToken,
  RoundedToken,
  ColorToken,
} from "./token";

export type {
  IHeader,
  FontSizeToken,
  SizeToken,
  RoundedToken,
  ColorToken,
  ICardLink,
};
