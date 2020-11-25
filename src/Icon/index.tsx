// Dependencies
import React, { FC, ReactElement } from 'react'
import { cx } from '@contentpi/utils'

interface iProps {
  children?: ReactElement | string
  className?: string
  type?: string
  title?: string
  library?: 'fontawesome' | 'feather'
  width?: number
  height?: number
  background?: string
  onClick?(): void
}

const Icon: FC<iProps> = (props): ReactElement => {
  const { type, className = '', children, library = 'fontawesome' } = props
  const iconProps = { ...props }

  delete iconProps.type
  delete iconProps.className
  delete iconProps.library
  let style = {}

  if (props.onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  if (library !== 'fontawesome') {
    return (
      <img
        className={cx('Icon', className)}
        style={style}
        {...iconProps}
        alt={type}
        src={require(`./icons/${library}/${type}.svg`)}
      />
    )
  }

  if (children) {
    return (
      <i style={style} {...iconProps} className={cx('Icon', className)}>
        {children}
      </i>
    )
  }

  return <i style={style} {...iconProps} className={cx('Icon', `${type} ${className}`)} />
}

export default Icon
