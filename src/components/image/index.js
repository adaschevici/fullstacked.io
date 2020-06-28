import React from 'react'
import Img from 'gatsby-image'

export default ({ fluid, width }) => {
  return <Img style={{ width }} fluid={fluid} />
}
