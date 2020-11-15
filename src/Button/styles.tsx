import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ButtonBase = styled.button`
  user-select: none;
  border: 1px solid transparent;

  color: #fff;
  background-color: #0fac81;
  border-color: #0fac81;

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
`

const buttonSizes = {
  sm: css`
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
    border-radius: 3px;
  `,
  md: css`
    padding: 0.4375rem 1.125rem;
    font-size: 0.8125rem;
    line-height: 1.25rem;
    border-radius: 4px;
  `,
  lg: css`
    padding: 0.6875rem 1.5rem;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    border-radius: 5px;
  `,
  xl: css`
    padding: 0.625rem 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    border-radius: 5px;
  `
}

const buttonVariants = {
  contained: css`
    color: #fff;
    background-color: #0fac81;
    border-color: #0fac81;

    &:hover {
      color: #fff;
      background-color: #0c8967;
      border-color: #0b7d5e;
    }
  `,
  outlined: css`
    color: #0fac81;
    background-color: transparent;
    border-color: #0fac81;

    &:hover {
      color: #fff;
      background-color: #0fac81;
      border-color: #0fac81;
    }
  `,
  text: css`
    color: #0fac81;
    background-color: transparent;
    border-color: transparent;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `
}
export { ButtonBase, buttonSizes, buttonVariants }
