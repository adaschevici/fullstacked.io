import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from '.'

storiesOf('Elements|LogoComposite', module)
  .add('Default', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <Logo outerWidth={350} />
    </div>
  ))
  .add('With Writing', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <Logo outerWidth={350} withWriting />
    </div>
  ))
