// Dependencies
import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { isEmptyObject } from '@contentpi/utils'
import { defaultTheme } from '@theme'

export const COMPONENT_CLASS_NAME = 'btn'

const ButtonSizesStyles = css`
  &.${COMPONENT_CLASS_NAME}-sm {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    border-radius: 3px;
  }
  &.${COMPONENT_CLASS_NAME}-md {
    padding: 0.4375rem 1.125rem;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    border-radius: 4px;
  }
  &.${COMPONENT_CLASS_NAME}-lg {
    padding: 0.6875rem 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    border-radius: 5px;
  }
  &.${COMPONENT_CLASS_NAME}-xl {
    padding: 0.625rem 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    border-radius: 5px;
  }
`

const ButtonVariantsStyles = (theme: Theme = defaultTheme) => css`
  &.${COMPONENT_CLASS_NAME}-contained {
    &.${COMPONENT_CLASS_NAME}-primary {
      color: ${theme.palette.primary.contrastText};
      background-color: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.main};
      &:hover {
        background-color: ${theme.palette.primary.dark};
        border-color: ${theme.palette.primary.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-secondary {
      color: ${theme.palette.secondary.contrastText};
      background-color: ${theme.palette.secondary.main};
      border-color: ${theme.palette.secondary.main};
      &:hover {
        background-color: ${theme.palette.secondary.dark};
        border-color: ${theme.palette.secondary.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-info {
      color: ${theme.palette.info.contrastText};
      background-color: ${theme.palette.info.main};
      border-color: ${theme.palette.info.main};
      &:hover {
        background-color: ${theme.palette.info.dark};
        border-color: ${theme.palette.info.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-success {
      color: ${theme.palette.success.contrastText};
      background-color: ${theme.palette.success.main};
      border-color: ${theme.palette.success.main};
      &:hover {
        background-color: ${theme.palette.success.dark};
        border-color: ${theme.palette.success.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-warning {
      color: ${theme.palette.warning.contrastText};
      background-color: ${theme.palette.warning.main};
      border-color: ${theme.palette.warning.main};
      &:hover {
        background-color: ${theme.palette.warning.dark};
        border-color: ${theme.palette.warning.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-danger {
      color: ${theme.palette.danger.contrastText};
      background-color: ${theme.palette.danger.main};
      border-color: ${theme.palette.danger.main};
      &:hover {
        background-color: ${theme.palette.danger.dark};
        border-color: ${theme.palette.danger.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-light {
      color: ${theme.palette.light.contrastText};
      background-color: ${theme.palette.light.main};
      border-color: ${theme.palette.light.main};
      &:hover {
        background-color: ${theme.palette.light.dark};
        border-color: ${theme.palette.light.dark};
      }
    }
    &.${COMPONENT_CLASS_NAME}-dark {
      color: ${theme.palette.dark.contrastText};
      background-color: ${theme.palette.dark.main};
      border-color: ${theme.palette.dark.main};
      &:hover {
        background-color: ${theme.palette.dark.dark};
        border-color: ${theme.palette.dark.dark};
      }
    }
  }
  &.${COMPONENT_CLASS_NAME}-outlined {
    &.${COMPONENT_CLASS_NAME}-primary {
      color: ${theme.palette.primary.main};
      background-color: transparent;
      border-color: ${theme.palette.primary.main};
      &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.primary.main};
        border-color: ${theme.palette.primary.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-secondary {
      color: ${theme.palette.secondary.main};
      background-color: transparent;
      border-color: ${theme.palette.secondary.main};
      &:hover {
        color: ${theme.palette.secondary.contrastText};
        background-color: ${theme.palette.secondary.main};
        border-color: ${theme.palette.secondary.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-info {
      color: ${theme.palette.info.main};
      background-color: transparent;
      border-color: ${theme.palette.info.main};
      &:hover {
        color: ${theme.palette.info.contrastText};
        background-color: ${theme.palette.info.main};
        border-color: ${theme.palette.info.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-success {
      color: ${theme.palette.success.main};
      background-color: transparent;
      border-color: ${theme.palette.success.main};
      &:hover {
        color: ${theme.palette.success.contrastText};
        background-color: ${theme.palette.success.main};
        border-color: ${theme.palette.success.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-warning {
      color: ${theme.palette.warning.main};
      background-color: transparent;
      border-color: ${theme.palette.warning.main};
      &:hover {
        color: ${theme.palette.warning.contrastText};
        background-color: ${theme.palette.warning.main};
        border-color: ${theme.palette.warning.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-danger {
      color: ${theme.palette.danger.main};
      background-color: transparent;
      border-color: ${theme.palette.danger.main};
      &:hover {
        color: ${theme.palette.danger.contrastText};
        background-color: ${theme.palette.danger.main};
        border-color: ${theme.palette.danger.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-light {
      color: ${theme.palette.light.main};
      background-color: transparent;
      border-color: ${theme.palette.light.main};
      &:hover {
        color: ${theme.palette.light.contrastText};
        background-color: ${theme.palette.light.main};
        border-color: ${theme.palette.light.main};
      }
    }
    &.${COMPONENT_CLASS_NAME}-dark {
      color: ${theme.palette.dark.main};
      background-color: transparent;
      border-color: ${theme.palette.dark.main};
      &:hover {
        color: ${theme.palette.dark.contrastText};
        background-color: ${theme.palette.dark.main};
        border-color: ${theme.palette.dark.main};
      }
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

export const ButtonBase = styled.button`
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

  ${ButtonSizesStyles}
  ${({ theme }) => ButtonVariantsStyles(isEmptyObject(theme) ? defaultTheme : theme)}
`
