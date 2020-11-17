// Dependencies
import React, { FC, ReactElement } from 'react'
import styled from '@emotion/styled'

// Components
import Icon from '../Icon'

const StyledSteps = styled.ul`
  position: relative;
  padding-left: 45px;
  list-style: none;
  color: #6e6299;
  font-size: 14px;
  line-height: 23px;

  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 23px;
    width: 10px;
    height: 88%;
    ${({ color }): any => `
      border-left: 1px solid ${color};
    `}
  }

  li {
    position: relative;
    counter-increment: list;
    cursor: pointer;

    strong {
      color: #444;
    }

    span {
      display: block;
    }

    &:hover {
      ${({ color }): any => `
        color: ${color};
      `}

      strong, span {
        ${({ color }): any => `
          color: ${color};
        `}
      }
    }

    a {
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: #6e6299;
    }

    &:hover {
      i {
        ${({ color }): any => `
          color: ${color};
        `}
      }
    }

    i {
      font-size: 24px;
    }

    &:not(:last-child) {
      padding-bottom: 20px;
    }

    &::before {
      display: inline-block;
      content: '';
      position: absolute;
      left: -22px;
      height: 90%;
      width: 10px;
    }

    &::after {
      content: counter(list);
      display: inline-block;
      position: absolute;
      top: 0;
      left: -37px;
      width: 30px;
      line-height: 30px;
      text-align: center;
      height: 30px;
      border-radius: 50%;
      background-color: #fff;
      ${({ color }): any => `
        color: 1px solid ${color};
        border: 1px solid ${color};
      `}
    }

    &.done {
      &::before {
        ${({ color }): any => `
          color: 1px solid ${color};
          border-left: 1px solid ${color};
        `}
      }

      &::after {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f00c';
        font-size: 15px;
        color: #fff;
        line-height: 32px;
        text-align: center;
        ${({ color }): any => `
          background-color: ${color};
          border: 1px solid ${color};
        `}
      }
    }

    &.last {
      &::before {
        border-left: 1px solid transparent;
      }
    }
  }

  strong {
    display: block;
  }
`

type tStep = {
  step: string
  description?: string
  done: boolean
  href: string
}

interface iProps {
  steps: tStep[]
  color?: string
}

const Steps: FC<iProps> = ({ steps, color = '#2ea1f8' }): ReactElement => {
  if (steps.length === 0) {
    return <div />
  }

  const totalSteps = steps.length

  return (
    <StyledSteps color={color}>
      {steps.map((step: tStep, i: number) => (
        <li className={`item ${step.done ? 'done' : ''} ${totalSteps === i + 1 ? 'last' : ''}`}>
          <a href={step.href} title={step.step}>
            <div>
              <strong>{step.step}</strong>
              {step.description && <span>{step.description}</span>}
            </div>
            <div>
              <Icon type="fas fa-angle-right" />
            </div>
          </a>
        </li>
      ))}
    </StyledSteps>
  )
}

export default Steps
