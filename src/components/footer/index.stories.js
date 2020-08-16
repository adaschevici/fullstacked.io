import React from 'react'
import { storiesOf } from '@storybook/react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

import Footer from '.'

storiesOf('Sections/Footer', module).add('Default', () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <Parallax pages={1}>
      <Footer />
    </Parallax>
  </div>
))
