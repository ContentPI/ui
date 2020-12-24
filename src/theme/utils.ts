import React from 'react'
import { ThemeContext, Theme } from '@emotion/react'
import { defaultTheme } from '@theme'

export const useDefaultTheme = (): Theme => {
  const providerTheme = React.useContext(ThemeContext)

  const theme = { ...defaultTheme, ...providerTheme }

  return theme
}
