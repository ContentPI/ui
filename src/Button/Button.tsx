/**
 * @jsx jsx
 * @jsxFrag React.Fragment
 * */
import React, { FC } from 'react'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

import { ButtonBase, buttonSizes, buttonVariants } from './styles'

type ButtonSizes = 'sm' | 'md' | 'lg' | 'xl'
type ButtonVariants = 'contained' | 'outlined' | 'text'

interface Props {
  size?: ButtonSizes
  variant?: ButtonVariants
}

const StyledButton = styled(ButtonBase)<Props>`
  ${({ size }) => {
    if (size) {
      return buttonSizes[size]
    } else {
      return buttonSizes.md
    }
  }}
  ${({ variant }) => {
    if (variant) {
      return buttonVariants[variant]
    } else {
      return buttonVariants.contained
    }
  }}
`

const Button: FC = () => {
  return (
    <>
      <StyledButton size="sm" variant="text">
        Primary
      </StyledButton>
      <StyledButton>Primary</StyledButton>
      <StyledButton size="lg" variant="outlined">
        Primary
      </StyledButton>
      <StyledButton size="xl" variant="outlined">
        Primary
      </StyledButton>
      <StyledButton size="sm">Primary</StyledButton>
      <StyledButton>Primary</StyledButton>
      <StyledButton size="lg">Primary</StyledButton>
      <StyledButton size="xl" disabled>
        Primary
      </StyledButton>
    </>
  )
}

export default Button
