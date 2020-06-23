import React from 'react'
import { storiesOf } from '@storybook/react'

import Writing from './writing'

storiesOf('Elements|Logo', module).add('Writing', () => (
  <div style={{ width: '150px', height: '150px' }}>
    <Writing width="150px" />
  </div>
))
