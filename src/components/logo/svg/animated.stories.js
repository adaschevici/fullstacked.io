import React from 'react'
import { storiesOf } from '@storybook/react'

import Animated from './animated'

storiesOf('Elements|Logo', module).add('Logo Image', () => (
  <div style={{ position: 'relative', width: '300px', height: '300px' }}>
    <Animated width="150px" />
  </div>
))
