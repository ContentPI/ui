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
      main: '#00c7ff',
      light: '#00b5e8',
      dark: '#00b5e8',
      contrastText: '#fff'
    },
    secondary: {
      main: '#6c757d',
      light: '#606870',
      dark: '#606870',
      contrastText: '#fff'
    },
    info: {
      main: '#00bcd4',
      light: '#00aec5',
      dark: '#008fa1',
      contrastText: '#fff'
    },
    success: {
      main: '#4caf50',
      light: '#47a44b',
      dark: '#3d8b40',
      contrastText: '#fff'
    },
    warning: {
      main: '#ff9800',
      light: '#ffe608',
      dark: '#f08f00',
      contrastText: '#fff'
    },
    danger: {
      main: '#f44336',
      light: '#f33527',
      dark: '#ea1c0d',
      contrastText: '#fff'
    },
    light: {
      main: '#E5E9F2',
      light: '#d5d9e2',
      dark: '#d5d9e2',
      contrastText: '#282828'
    },
    dark: {
      main: '#343a40',
      light: '#22272A',
      dark: '#22272A',
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
