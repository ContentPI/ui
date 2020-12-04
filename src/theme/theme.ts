import { Theme } from '@emotion/react'

import createBreakpoints from './createBreakpoints'

const theme: Theme = {
  breakpoints: createBreakpoints(),
  palette: {
    background: {
      paper: '#fff',
      default: '#212529'
    },
    primary: {
      main: '#00bde5',
      light: '#65f0ff',
      dark: '#008db3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#121212',
      light: '#161616',
      dark: '#007bff',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)'
    }
  }
}

export default theme
