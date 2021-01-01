import { css } from '@emotion/react'

const GlobalStyle = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  * {
    &:focus {
      outline: 0 !important;
    }
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
