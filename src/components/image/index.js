import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = ({ fluid, width, height }) => {
  return <Img style={{ width, height }} fluid={fluid} />
}

const StyledImage = styled(Image)`
  position: absolute;
  background-color: 'red';
`

export default StyledImage
