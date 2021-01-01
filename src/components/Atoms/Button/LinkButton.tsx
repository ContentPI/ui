// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'

// Components
import Button from './Button'

// Types
import { Sizes, Colors, Block } from './types'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: Sizes
  color?: Colors
  block?: Block
  href?: string
  as?: string
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
  Link?: any
}

const _Button: FC<iProps> = props => <Button color="primary" variant="text" {...props} />

export default _Button
