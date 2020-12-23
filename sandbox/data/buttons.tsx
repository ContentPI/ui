import React, { ReactElement } from 'react'

// Atoms
import { Button } from '@atoms'

export interface iButton {
  title: string
  description: string
  render: ReactElement
  code: string
}

const buttons: iButton[] = [
  {
    title: 'Button',
    description: 'A standard button',
    render: <Button>Button</Button>,
    code: `
    <Button>
      Standard Button
    </Button>
    `
  },
  {
    title: 'Emphasis',
    description: 'A button can be formatted to show different levels of emphasis',
    render: (
      <>
        <Button color="primary">Save</Button>
        <Button>Cancel</Button>
      </>
    ),
    code: `
    <Button color="primary">Save</Button>
    <Button>Cancel</Button>
    `
  },
  {
    title: 'Colors',
    description:
      'Available colors: primary, secondary, info, success, warning, danger, dark, light',
    render: (
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
      </>
    ),
    code: `
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="dark">Dark</Button>
    <Button color="light">Light</Button>
    `
  },
  {
    title: 'Variant Outlined',
    description:
      'Available colors: primary, secondary, info, success, warning, danger, dark, light',
    render: (
      <>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button color="info" variant="outlined">
          Info
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="warning" variant="outlined">
          Warning
        </Button>
        <Button color="danger" variant="outlined">
          Danger
        </Button>
        <Button color="dark" variant="outlined">
          Dark
        </Button>
        <Button color="light" variant="outlined">
          Light
        </Button>
      </>
    ),
    code: `
    <Button color="primary" variant="outlined">
      Primary
    </Button>
    <Button color="secondary" variant="outlined">
      Secondary
    </Button>
    <Button color="info" variant="outlined">
      Info
    </Button>
    <Button color="success" variant="outlined">
      Success
    </Button>
    <Button color="warning" variant="outlined">
      Warning
    </Button>
    <Button color="danger" variant="outlined">
      Danger
    </Button>
    <Button color="dark" variant="outlined">
      Dark
    </Button>
    <Button color="light" variant="outlined">
      Light
    </Button>
    `
  },
  {
    title: 'Sizes',
    description: 'Available sizes: sm, md, lg & xl',
    render: (
      <>
        <Button color="primary" size="sm">
          Small Size
        </Button>
        <Button color="primary" size="md">
          Regular Size
        </Button>
        <Button color="primary" size="lg">
          Large Size
        </Button>
        <Button color="primary" size="xl">
          ExtraLarge Size
        </Button>
      </>
    ),
    code: `
    <Button color="primary" size="sm">Small Size</Button>
    <Button color="primary" size="md">Regular Size</Button>
    <Button color="primary" size="lg">Large Size</Button>
    <Button color="primary" size="xl">ExtraLarge Size</Button>
    `
  }
]

export default buttons
