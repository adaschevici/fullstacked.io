import React from 'react'
import { storiesOf } from '@storybook/react'

import LogoV1 from '.'

storiesOf('Elements|LogoCompositeV1', module)
  .add('Default', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <LogoV1 outerWidth={350} marginRight={50} />
    </div>
  ))
  .add('With Writing', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <LogoV1 outerWidth={350} marginRight={50} withWriting />
    </div>
  ))
