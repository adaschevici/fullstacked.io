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
            vertical-align: middle;
            transition: filter 0.3s;
            padding: 5px;
            :hover {
              filter: brightness(87.5%);
            }
          `}
        >
          <Image width="100vw" fluid={image.childImageSharp.fluid} />
        </Box>
      )
    })}
  </Box>
)
