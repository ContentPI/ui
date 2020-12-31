import React, { ReactElement } from 'react'

// Atoms
import { Button } from '@atoms'

export interface iButton {
  title: string
  prop?: string
  description: string
  render: ReactElement
  code: string
}

const buttons: iButton[] = [
  {
    title: 'Button',
    description: 'A standard button',
    render: <Button href="#">Button</Button>,
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
        <Button color="primary" href="#">
          Save
        </Button>
        <Button href="#">Cancel</Button>
      </>
    ),
    code: `
    <Button color="primary">Save</Button>
    <Button>Cancel</Button>
    `
  },
  {
    title: 'Colors',
    prop: 'color',
    description: 'primary, secondary, info, success, warning, danger, dark, light',
    render: (
      <>
        <Button color="primary" href="#">
          Primary
        </Button>
        <Button color="secondary" href="#">
          Secondary
        </Button>
        <Button color="info" href="#">
          Info
        </Button>
        <Button color="success" href="#">
          Success
        </Button>
        <Button color="warning" href="#">
          Warning
        </Button>
        <Button color="danger" href="#">
          Danger
        </Button>
        <Button color="dark" href="#">
          Dark
        </Button>
        <Button color="light" href="#">
          Light
        </Button>
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
    prop: 'disabled',
    description: 'boolean',
    render: (
      <>
        <Button color="primary" disabled href="#">
          Disabled
        </Button>
        <Button color="secondary" disabled href="#">
          Secondary
        </Button>
        <Button color="info" disabled href="#">
          Info
        </Button>
        <Button color="success" disabled href="#">
          Success
        </Button>
        <Button color="warning" disabled href="#">
          Warning
        </Button>
        <Button color="danger" disabled href="#">
          Danger
        </Button>
        <Button color="dark" disabled href="#">
          Dark
        </Button>
        <Button color="light" disabled href="#">
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
    prop: 'variant',
    description: 'outlined',
    render: (
      <>
        <Button color="primary" variant="outlined" href="#">
          Primary
        </Button>
        <Button color="secondary" variant="outlined" href="#">
          Secondary
        </Button>
        <Button color="info" variant="outlined" href="#">
          Info
        </Button>
        <Button color="success" variant="outlined" href="#">
          Success
        </Button>
        <Button color="warning" variant="outlined" href="#">
          Warning
        </Button>
        <Button color="danger" variant="outlined" href="#">
          Danger
        </Button>
        <Button color="dark" variant="outlined" href="#">
          Dark
        </Button>
        <Button color="light" variant="outlined" href="#">
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
    prop: 'size',
    description: 'sm, md, lg & xl',
    render: (
      <>
        <p>
          <Button color="primary" size="sm" href="#">
            Small Size
          </Button>
          <Button color="primary" size="md" href="#">
            Regular Size
          </Button>
          <Button color="primary" size="lg" href="#">
            Large Size
          </Button>
          <Button color="primary" size="xl" href="#">
            ExtraLarge Size
          </Button>
        </p>
        <p>
          <Button color="primary" size="sm" variant="outlined" href="#">
            Small Size
          </Button>
          <Button color="primary" size="md" variant="outlined" href="#">
            Regular Size
          </Button>
          <Button color="primary" size="lg" variant="outlined" href="#">
            Large Size
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
  },
  {
    title: 'Block',
    prop: 'block',
    description: 'full',
    render: (
      <>
        <p>
          <Button color="primary" block="full" href="#">
            Block level button
          </Button>
        </p>
        <p>
          <Button color="secondary" block="full" href="#">
            Block level button
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" block="full">Block level button</Button>
    <Button color="secondary" block="full">Block level button</Button>
    `
  }
]

export default buttons
