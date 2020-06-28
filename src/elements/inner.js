/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Inner = ({ className, children }) => (
  <div
    sx={{
      width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
      textAlign: `left`,
    }}
    className={className}
  >
    {children}
  </div>
)

export default Inner
