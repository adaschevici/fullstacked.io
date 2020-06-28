import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import addons from '@storybook/addons'

import ModeSelect from '../../storybook-knobs'

import Logo from '.'

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

const _ = select(label, options, defaultValue, groupId)

storiesOf('Elements|LogoComposite', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <ModeSelect channel={channel} />
      <Logo outerWidth={350} positioned />
    </div>
  ))
  .add('With Writing', () => (
    <div style={{ width: '150px', height: '150px' }}>
      <ModeSelect channel={channel} />
      <Logo outerWidth={350} positioned withWriting />
    </div>
  ))
