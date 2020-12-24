import React from 'react'
import { useDefaultTheme } from '@theme'
import { classNamesGenerator } from '@contentpi/utils'

import { COMPONENT_CLASS_NAME, ButtonBase, Sizes, Variants, Colors } from './Button.styled'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
}

const Button: React.FC<Props> = props => {
  const theme = useDefaultTheme()
  const { children, size = 'md', variant = 'contained', color = 'primary', ...btnProps } = props
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
