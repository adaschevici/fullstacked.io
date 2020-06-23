import React from 'react'
import styled from 'styled-components'

import { Animated, Writing } from './svg'

const Frame = styled.div`
  position: relative;
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`

const computeWidth = (outerWidth, withWriting) =>
  withWriting ? `${outerWidth - 10}px` : `${outerWidth}px`

export default ({ outerWidth, withWriting, marginRight, marginTop }) => (
  <Frame marginRight={marginRight} marginTop={marginTop}>
    {withWriting && <Writing width={`${outerWidth}px`} />}
    <Animated width={computeWidth(outerWidth, withWriting)} />
  </Frame>
)
