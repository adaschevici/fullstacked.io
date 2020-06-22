import React from 'react'
import { storiesOf } from '@storybook/react'

import Animated from './animated'

storiesOf('Elements|Logo', module).add('V2', () => (
  <div style={{ width: '300px', height: '300px' }}>
    <Animated />
  </div>
))
