import React from 'react'
import { storiesOf } from '@storybook/react'

import addons from '@storybook/addons'
import { withKnobs, select } from '@storybook/addon-knobs'

import ModeSelect from '../../../storybook-knobs'
import Writing from './writing'

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

storiesOf('Elements|Logo', module)
  .addDecorator(withKnobs)
  .add('Writing', () => {
    const _ = select(label, options, defaultValue, groupId)
    return (
      <div style={{ width: '150px', height: '150px' }}>
        <ModeSelect channel={channel} />
        <Writing width="150px" />
      </div>
    )
  })
