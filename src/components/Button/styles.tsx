import styled from '@emotion/styled'
import { defaultTheme } from '@Theme'

export const COMPONENT_CLASS_NAME = 'btn'

export type Sizes = 'sm' | 'md' | 'lg' | 'xl'
export type Variants = 'contained' | 'outlined' | 'text'

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

  &.${COMPONENT_CLASS_NAME}-contained {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      color: #fff;
      background-color: #0c8967;
      border-color: #0b7d5e;
    }
  }
  &.${COMPONENT_CLASS_NAME}-outlined {
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: transparent;
    border-color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      color: ${({ theme }) => theme.palette.primary.contrastText};
      background-color: ${({ theme }) => theme.palette.primary.main};
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
  &.${COMPONENT_CLASS_NAME}-text {
    color: ${({ theme }) => theme.palette.primary.main};
    background-color: transparent;
    border-color: transparent;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`

ButtonBase.defaultProps = {
  theme: defaultTheme
}
