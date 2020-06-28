import React from 'react'
import styled from 'styled-components'

import Logo from '../../../assets/logos/animated.svg'

const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
`

export default ({ width }) => (
  <Frame width={width}>
    <img src={Logo} />
  </Frame>
)
