import React from 'react'
import { storiesOf } from '@storybook/react'
import addons from '@storybook/addons'
import { withKnobs, select } from '@storybook/addon-knobs'

import ModeSelect from '../../../storybook-knobs'
import Animated from './animated'

const channel = addons.getChannel()

const label = 'Mode'
const options = {
  Dark: 'dark',
  Light: 'light',
}

const defaultValue = 'dark'
const groupId = 'MODE-GROUP-ID1'

channel.addListener('storybookjs/knobs/change', ({ value }) =>
  channel.emit('DARK_MODE', value)
)

storiesOf('Elements/Logo', module)
  .addDecorator(withKnobs)
  .add('Logo Image', () => {
    const _ = select(label, options, defaultValue, groupId)
    return (
      <div style={{ position: 'relative', width: '300px', height: '300px' }}>
        <ModeSelect channel={channel} />
        <Animated width="150px" />
      </div>
    )
  })
