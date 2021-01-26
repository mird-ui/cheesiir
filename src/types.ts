export interface KnowBaseTheme {
  colors: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: string;
  };
  breakPoints: {
    [key: string]: BreakPoint;
  };
  zIndices: {
    [key: string]: number;
  };
  borderRadii?: {
    [key: string]: number;
  };
}

export interface BaseTheme extends KnowBaseTheme {
  [key: string]: any;
}

export type BreakPoint = number | Dimensions;

export interface Dimensions {
  widht: number;
  height: number;
}
