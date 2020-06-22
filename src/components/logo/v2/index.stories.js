import React from 'react'
import { storiesOf } from '@storybook/react'

import LogoV2 from '.'

storiesOf('Elements|LogoCompositeV2', module)
  .add('Default', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <LogoV2 outerWidth={350} />
    </div>
  ))
  .add('With Writing', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <LogoV2 outerWidth={350} withWriting />
    </div>
  ))
