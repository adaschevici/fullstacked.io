import React from 'react'
import { Box } from 'rebass'

import Image from '../image'

export default ({ images }) => (
  <Box>
    {images.map((image) => {
      console.log(image)
      return (
        <Box
          css={`
            display: inline-block;
            transition: filter 0.3s;
            position: relative;
            filter: brightness(47.5%);
          `}
        >
          <Image
            height="100vh"
            width="100vw"
            fluid={image.childImageSharp.fluid}
          />
        </Box>
      )
    })}
  </Box>
)
