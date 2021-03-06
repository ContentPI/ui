// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { classNamesGenerator } from '@contentpi/utils'
import { Global } from '@emotion/react'
import { useDefaultTheme, GlobalStyles } from '@theme'
import Spinner from '../Spinner'
import { Sizes, Variants, Colors, Block } from './types'
import { ButtonBase, LinkButtonBase, COMPONENT_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
  color?: Colors
  block?: Block
  href?: string
  as?: string
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
  Link?: any
}

const Button: FC<iProps> = props => {
  const {
    children,
    size = 'md',
    variant = 'contained',
    color = 'light',
    block = '',
    href = undefined,
    as = undefined,
    disabled = undefined,
    isLoading = undefined,
    loadingText = undefined,
    Link = undefined,
    ...btnProps
  } = props
  const theme = useDefaultTheme()
  const data = [size, variant, color, block]
  let buttonText: any = children

  if (href) {
    data.push('link')
  }

  if (isLoading || disabled) {
    data.push('disabled')
  }

  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data
  })

  if (isLoading) {
    buttonText = (
      <>
        <Spinner spinner="rolling" style={{ width: '18px' }} /> &nbsp;&nbsp;&nbsp; {loadingText}
      </>
    )
  }

  if (href) {
    const linkBtnProps: any = {
      href
    }

    if (as) {
      linkBtnProps.as = as
    }

    if (Link) {
      return (
        <LinkButtonBase
          className={classNames}
          {...linkBtnProps}
          disabled={isLoading || disabled}
          theme={theme}
        >
          <Link {...linkBtnProps}>{buttonText}</Link>
        </LinkButtonBase>
      )
    }

    return (
      <LinkButtonBase
        className={classNames}
        {...linkBtnProps}
        theme={theme}
        disabled={isLoading || disabled}
      >
        <a {...linkBtnProps}>{buttonText}</a>
      </LinkButtonBase>
    )
  }

  return (
    <>
      <Global styles={GlobalStyles} />

      <ButtonBase
        className={classNames}
        {...btnProps}
        theme={theme}
        disabled={isLoading || disabled}
      >
        {buttonText}
      </ButtonBase>
    </>
  )
}

export default Button
