// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'

// Components
import Button from './Button'

// Types
import { Sizes, Variants, Colors, Block } from './types'

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

const _Button: FC<iProps> = props => <Button color="success" {...props} />

export default _Button
