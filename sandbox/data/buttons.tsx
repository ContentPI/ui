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
    title: 'Disabled',
    description:
      'Available colors: primary, secondary, info, success, warning, danger, dark, light',
    render: (
      <>
        <Button color="primary" disabled>
          Disabled
        </Button>
        <Button color="secondary" disabled>
          Secondary
        </Button>
        <Button color="info" disabled>
          Info
        </Button>
        <Button color="success" disabled>
          Success
        </Button>
        <Button color="warning" disabled>
          Warning
        </Button>
        <Button color="danger" disabled>
          Danger
        </Button>
        <Button color="dark" disabled>
          Dark
        </Button>
        <Button color="light" disabled>
          Light
        </Button>
      </>
    ),
    code: `
    <Button color="primary" disabled>
      Disabled
    </Button>
    <Button color="secondary" disabled>
      Secondary
    </Button>
    <Button color="info" disabled>
      Info
    </Button>
    <Button color="success" disabled>
      Success
    </Button>
    <Button color="warning" disabled>
      Warning
    </Button>
    <Button color="danger" disabled>
      Danger
    </Button>
    <Button color="dark" disabled>
      Dark
    </Button>
    <Button color="light" disabled>
      Light
    </Button>
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
    <Button color="primary" variant="outlined">Primary</Button>
    <Button color="secondary" variant="outlined">Secondary</Button>
    <Button color="info" variant="outlined">Info</Button>
    <Button color="success" variant="outlined">Success</Button>
    <Button color="warning" variant="outlined">Warning</Button>
    <Button color="danger" variant="outlined">Danger</Button>
    <Button color="dark" variant="outlined">Dark</Button>
    <Button color="light" variant="outlined">Light</Button>
    `
  },
  {
    title: 'Sizes',
    description: 'Available sizes: sm, md, lg & xl',
    render: (
      <>
        <p>
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
        </p>
        <p>
          <Button color="primary" size="sm" variant="outlined">
            Small Size
          </Button>
          <Button color="primary" size="md" variant="outlined">
            Regular Size
          </Button>
          <Button color="primary" size="lg" variant="outlined">
            Large Size
          </Button>
          <Button color="primary" size="xl" variant="outlined">
            ExtraLarge Size
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" size="sm">Small Size</Button>
    <Button color="primary" size="md">Regular Size</Button>
    <Button color="primary" size="lg">Large Size</Button>
    <Button color="primary" size="xl">ExtraLarge Size</Button>

    <Button color="primary" variant="outlined" size="sm">Primary</Button>
    <Button color="primary" variant="outlined" size="md">Primary</Button>
    <Button color="primary" variant="outlined" size="lg">Primary</Button>
    <Button color="primary" variant="outlined" size="xl">Primary</Button>
    `
  }
]

export default buttons
