// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { classNamesGenerator } from '@contentpi/utils'
import { useDefaultTheme } from '@theme'
import { Sizes, Variants, Colors, Block } from './types'
import { ButtonBase, COMPONENT_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
  block?: Block
}

const Button: FC<iProps> = props => {
  const {
    children,
    size = 'md',
    variant = 'contained',
    color = 'light',
    block = '',
    ...btnProps
  } = props
  const theme = useDefaultTheme()
  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color, block]
  })

  return (
    <ButtonBase className={classNames} {...btnProps} theme={theme}>
      {children}
    </ButtonBase>
  )
}

export default Button
