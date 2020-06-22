import React from 'react'
import { storiesOf } from '@storybook/react'

import MultiColor from './multi-color'

storiesOf('Elements|Logo', module).add('V1', () => (
  <div style={{ width: '150px', height: '150px' }}>
    <MultiColor />
  </div>
))
