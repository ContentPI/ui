// import original module declarations
import '@emotion/react'
import '@emotion/styled'

// import theme from '../theme'

// export type ThemeType = typeof theme

// declare module '@emotion/react' {
//   export interface Theme extends ThemeType {}
// }
import { Breakpoints } from './createBreakpoints'

// and extend them!
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
      text: ITextColors
    }
  }
}

declare module '@emotion/styled' {
  export interface Theme {
    breakpoints: Breakpoints
    palette: {
      background: IBackground
      primary: IPalette
      secondary: IPalette
      text: ITextColors
    }
  }
}
