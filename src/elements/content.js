/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const Content = ({ speed, offset, children, className, factor }) => (
  <ParallaxLayer
    sx={{
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    }}
    speed={speed}
    offset={offset}
    factor={factor || 1}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Content
