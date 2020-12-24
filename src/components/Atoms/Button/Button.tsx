// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { classNamesGenerator } from '@contentpi/utils'
import { useDefaultTheme } from '@theme'
import { Sizes, Variants, Colors } from './types'
import { ButtonBase, COMPONENT_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
}

const Button: FC<iProps> = props => {
  const { children, size = 'md', variant = 'contained', color = 'light', ...btnProps } = props
  const theme = useDefaultTheme()
  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color]
  })

  return (
    <ButtonBase className={classNames} {...btnProps} theme={theme}>
      {children}
    </ButtonBase>
  )
}

export default Button
