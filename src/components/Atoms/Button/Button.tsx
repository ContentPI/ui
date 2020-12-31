// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { classNamesGenerator } from '@contentpi/utils'
import { useDefaultTheme } from '@theme'
import { Sizes, Variants, Colors, Block } from './types'
import { ButtonBase, LinkButtonBase, COMPONENT_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
  block?: Block
  href?: string
}

const Button: FC<iProps> = props => {
  const {
    children,
    size = 'md',
    variant = 'contained',
    color = 'light',
    block = '',
    href = undefined,
    disabled = undefined,
    ...btnProps
  } = props
  const theme = useDefaultTheme()
  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color, block, href ? 'link' : '', disabled ? 'disabled' : '']
  })

  if (href) {
    const linkBtnProps = {
      href,
      theme
    }

    return (
      <LinkButtonBase className={classNames} {...linkBtnProps}>
        {children}
      </LinkButtonBase>
    )
  }

  return (
    <ButtonBase className={classNames} {...btnProps} theme={theme}>
      {children}
    </ButtonBase>
  )
}

export default Button
