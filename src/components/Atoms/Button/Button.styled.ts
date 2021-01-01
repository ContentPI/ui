// Dependencies
import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'

// Theme
import { defaultTheme } from '@theme'

export const COMPONENT_CLASS_NAME = 'btn'

const ButtonSizesStyles = (isLink = false) => {
  const increase = isLink ? 2 : 0

  return css`
    margin-right: 5px;

    &.${COMPONENT_CLASS_NAME}-sm {
      padding: ${4 + increase}px 12px;
      font-size: 12px;
      line-height: 1.25rem;
      border-radius: 3px;
    }
    &.${COMPONENT_CLASS_NAME}-md {
      padding: ${7 + increase}px 18px;
      font-size: 13px;
      line-height: 1.25rem;
      border-radius: 4px;
    }
    &.${COMPONENT_CLASS_NAME}-lg {
      padding: ${11 + increase}px 24px;
      font-size: 15px;
      line-height: 1.25rem;
      border-radius: 5px;
    }
    &.${COMPONENT_CLASS_NAME}-xl {
      padding: ${10 + increase + (increase > 0 ? 3 : 0)}px 32px;
      font-size: 18px;
      line-height: 2rem;
      border-radius: 5px;
    }
    &.${COMPONENT_CLASS_NAME}-full {
      ${isLink ? 'display: block;' : ''}
      width: 100%;
    }
  `
}

const generateColors = (
  theme: Theme,
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark',
  isLink = false,
  isOutline = false
) => css`
  ${!isLink
    ? `color: ${!isOutline ? theme.palette[color].contrastText : theme.palette[color].main};`
    : ''}
  background-color: ${!isOutline ? theme.palette[color].main : 'transparent'};
  border-color: ${theme.palette[color].main};

  &:hover {
    background-color: ${theme.palette[color].dark};
    border-color: ${theme.palette[color].dark};
    color: ${theme.palette.default.paper};

    ${isLink &&
    `
      a {
        color: ${theme.palette.default.paper};
      }
    `}
  }

  a {
    color: ${!isOutline ? theme.palette[color].contrastText : theme.palette[color].main};

    &:hover {
      color: ${theme.palette.default.paper};
    }
  }
`

const ButtonVariantsStyles = (theme: Theme = defaultTheme, isLink = false) => css`
  &.${COMPONENT_CLASS_NAME}-contained {
    &.${COMPONENT_CLASS_NAME}-primary {
      ${generateColors(theme, 'primary', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-secondary {
      ${generateColors(theme, 'secondary', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-info {
      ${generateColors(theme, 'info', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-success {
      ${generateColors(theme, 'success', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-warning {
      ${generateColors(theme, 'warning', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-danger {
      ${generateColors(theme, 'danger', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-light {
      ${generateColors(theme, 'light', isLink)}
    }
    &.${COMPONENT_CLASS_NAME}-dark {
      ${generateColors(theme, 'dark', isLink)}
    }
  }
  &.${COMPONENT_CLASS_NAME}-outlined {
    &.${COMPONENT_CLASS_NAME}-primary {
      ${generateColors(theme, 'primary', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-secondary {
      ${generateColors(theme, 'secondary', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-info {
      ${generateColors(theme, 'info', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-success {
      ${generateColors(theme, 'success', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-warning {
      ${generateColors(theme, 'warning', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-danger {
      ${generateColors(theme, 'danger', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-light {
      ${generateColors(theme, 'light', isLink, true)}
    }
    &.${COMPONENT_CLASS_NAME}-dark {
      ${generateColors(theme, 'dark', isLink, true)}
    }
  }
  &.${COMPONENT_CLASS_NAME}-text {
    &.${COMPONENT_CLASS_NAME}-primary {
      color: ${theme.palette.primary.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-secondary {
      color: ${theme.palette.secondary.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-info {
      color: ${theme.palette.info.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-success {
      color: ${theme.palette.success.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-warning {
      color: ${theme.palette.warning.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-danger {
      color: ${theme.palette.danger.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-light {
      color: ${theme.palette.light.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &.${COMPONENT_CLASS_NAME}-dark {
      color: ${theme.palette.dark.main};
      background-color: transparent;
      border-color: transparent;
      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`

const ButtonStyle = css`
  &.${COMPONENT_CLASS_NAME} {
    user-select: none;
    border: 1px solid transparent;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  &.${COMPONENT_CLASS_NAME}-disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const ButtonBase = styled.button`
  position: relative;

  img {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  ${ButtonStyle}
  ${ButtonSizesStyles()}
  ${({ theme }) => ButtonVariantsStyles(theme)}
`

export const LinkButtonBase = styled.span<any>`
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;

    img {
      position: absolute;
      top: 2px;
      left: -10px;
    }
  }

  ${ButtonStyle}
  ${({ href }) => ButtonSizesStyles(href)}
  ${({ theme, href }) => ButtonVariantsStyles(theme, href)}
`
