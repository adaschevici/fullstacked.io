/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from 'theme-ui'
import Logo from '../logo'

import Content from '../../elements/content'

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (_) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Content>
      <Box as="footer" variant="footer">
        <button
          sx={{
            variant: `buttons.toggle`,
            fontWeight: `semibold`,
            display: `block`,
            mx: `auto`,
            mb: 3,
          }}
          onClick={toggleColorMode}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        <br />
        <Flex
          sx={{
            justifyContent: `center`,
            alignItems: `center`,
            mt: 3,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
          }}
        >
          <Logo outerWidth={30} marginRight={5} marginTop={5} positioned />
          {` `}
          <Link
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/adaschevici/fullstacked.io"
          >
            Theme
          </Link>
          <div sx={{ mx: 1 }}>by</div>
          {` `}
          <Link
            aria-label="Link to the theme author's website"
            href="https://artur.wtf"
          >
            ArtyDas
          </Link>
        </Flex>
      </Box>
    </Content>
  )
}

export default Footer
