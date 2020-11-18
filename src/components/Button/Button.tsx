import React from 'react'
import { classNamesGenerator } from '@Utils'
import { COMPONENT_CLASS_NAME, ButtonBase, Sizes, Variants } from './styles'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  variant?: Variants
}

const Button: React.FC<Props> = props => {
  const { children, size = 'md', variant = 'contained', ...btnProps } = props
  let classNames = classNamesGenerator({
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant]
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {children}
    </ButtonBase>
  )
}

export default Button
