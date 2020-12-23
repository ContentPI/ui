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
      light: '#E5E9F2',
      dark: '#E5E9F2',
      contrastText: '#fff'
    },
    dark: {
      main: '#22272A',
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
