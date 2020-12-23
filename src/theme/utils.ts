import React from 'react'
import { ThemeContext } from '@emotion/react'
import { defaultTheme } from '@Theme'

export const useDefaultTheme = () => {
    const providerTheme = React.useContext(ThemeContext)
    const theme = { ...defaultTheme, ...providerTheme }

    return theme
}