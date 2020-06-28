import React from 'react'
import styled, { css } from 'styled-components'

import { Animated, Writing } from './svg'

const positionMixin = css`
  position: relative;
`

const Frame = styled.div`
  ${({ positioned }) => (positioned ? positionMixin : '')}
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : '0px'};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0px')};
`

const computeWidth = (outerWidth, withWriting) =>
  withWriting ? `${outerWidth - 10}px` : `${outerWidth}px`

export default ({
  outerWidth,
  withWriting,
  marginRight,
  marginTop,
  positioned,
}) => (
  <Frame
    marginRight={marginRight}
    marginTop={marginTop}
    positioned={positioned}
  >
    {withWriting && <Writing width={`${outerWidth}px`} />}
    <Animated width={computeWidth(outerWidth, withWriting)} />
  </Frame>
)
