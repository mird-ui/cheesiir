/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import { BaseTheme } from "./types";

export const ThemeContext = React.createContext({
  colors: {},
  spacing: {},
  breakPoints: {},
});

export const themeProvider = ({
  theme,
  children,
}: {
  theme: BaseTheme;
  children: React.ReactNode;
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
