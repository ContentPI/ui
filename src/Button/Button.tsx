import styled from '@emotion/styled'

import { buttonSizes, buttonVariants } from './styles'

// Types
export type ButtonSizes = keyof typeof buttonSizes
export type ButtonVariants = keyof typeof buttonVariants

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  size?: ButtonSizes
  variant?: ButtonVariants
}

// type AnyTag = string | React.FunctionComponent<never> | (new (props: never) => React.Component)

// type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
//   ? JSX.IntrinsicElements[Tag]
//   : Tag extends React.ComponentType<infer Props>
//   ? Props & JSX.IntrinsicAttributes
//   : never

// interface SomeProps {
//   x: boolean
//   y: boolean
//   z: boolean
// }

// function Bar(props: SomeProps) {
//   return (
//     <div>
//       {props.x} {props.y} {props.z}
//     </div>
//   )
// }

// const Bazz: FC<SomeProps> = props => {
//   const { x, y, z } = props
//   return (
//     <div>
//       {x} {y} {z}
//     </div>
//   )
// }

// function Foo(props: any) {
//   return <div>Implementation goes here!</div>
// }

// export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
//   specialProp?: string
// }

const ButtonB = styled.button<Props>`
  user-select: none;
  border: 1px solid transparent;

  color: #fff;
  background-color: #0fac81;
  border-color: #0fac81;

  font-weight: 700;
  text-align: center;
  vertical-align: middle;

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  ${({ size }) => {
    if (size) {
      return buttonSizes[size]
    }
  }}
  ${({ variant }) => {
    if (variant) {
      return buttonVariants[variant]
    }
  }}
`

ButtonB.defaultProps = {
  size: 'md',
  variant: 'contained'
}

export default ButtonB
