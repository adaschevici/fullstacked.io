import React, { useEffect } from 'react'
import addons from '@storybook/addons'
import { configure, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import GlobalStyle from '../src/global/GlobalStyle'
import { ThemeProvider, useColorMode } from 'theme-ui'
import theme from '../src/gatsby-plugin-theme-ui'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Decorator = (storyFn) => (
  <Wrapper>
    <GlobalStyle />
    {storyFn()}
  </Wrapper>
)

addDecorator(Decorator)

const channel = addons.getChannel()

const ThemeChanger = () => {
  const [_, setColorMode] = useColorMode()

  const setDarkMode = (isDark) => setColorMode(isDark ? 'dark' : 'default')

  useEffect(() => {
    channel.on('DARK_MODE', setDarkMode)
    return () => channel.removeListener('DARK_MODE', setDarkMode)
  }, [channel, setColorMode])

  return <div />
}

const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeChanger />
      {children}
    </ThemeProvider>
  )
}

addDecorator((renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>)

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__PATH_PREFIX__ = ''
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
