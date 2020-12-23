// Dependencies
import React, { FC, useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import styled from '@emotion/styled'

// Components
import Icon from '../src/Icon'

// Data
import buttons, { iButton } from './data/buttons'

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 500px;
  width: 1024px;

  h2 {
    font-weight: 600;
    margin: 0;
  }

  button {
    margin-right: 5px;
  }
  .spinners {
    display: flex;
    justify-content: space-between;
    background: #34495e;
    padding: 20px;
  }
`

const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  pre {
    min-width: 650px;
  }
`
const StyledShowCode = styled.div`
  margin-top: 18px;
  cursor: pointer;
`

const StyledPre = styled.pre`
  display: none;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #333;

  &.show {
    display: block;
  }
`

const App: FC = () => {
  const [showCode, setShowCode] = useState<boolean | number>(false)

  const handleShowCode = (code: number) => {
    if (showCode !== code) {
      setShowCode(code)
    } else {
      setShowCode(false)
    }
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <StyledApp>
      <h1>Types</h1>

      <h2>&lt;Button /&gt;</h2>

      {buttons.map(({ title, description, render, code }: iButton, i: number) => (
        <StyledBlock>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>

            {render}

            <StyledPre className={showCode === i ? 'show' : ''}>
              <code className="language-jsx">{code}</code>
            </StyledPre>
          </div>
          <div>
            <StyledShowCode onClick={() => handleShowCode(i)} title="View Code">
              <Icon type="code" library="feather" />
            </StyledShowCode>
          </div>
        </StyledBlock>
      ))}
    </StyledApp>
  )
}

export default App
