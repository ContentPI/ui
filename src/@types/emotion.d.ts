import '@emotion/react'

import { Breakpoints } from '../theme/createBreakpoints'

interface IBackground {
  paper: string
  default: string
}

interface IPalette {
  main: string
  light: string
  dark: string
  contrastText: string
}

interface ITextColors {
  primary: string
  secondary: string
  disabled: string
  hint: string
  divider: string
}

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: Breakpoints
    palette: {
      background: IBackground
      primary: IPalette
      secondary: IPalette
      info: IPalette
      success: IPalette
      warning: IPalette
      danger: IPalette
      light: IPalette
      dark: IPalette
      text: ITextColors
    }
  }
}
