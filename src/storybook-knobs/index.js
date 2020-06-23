import React, { useEffect } from 'react'
import { useColorMode } from 'theme-ui'

const ModeSelect = ({ channel }) => {
  const [_, setColorMode] = useColorMode()

  const setMode = (isDark) => setColorMode(isDark)

  useEffect(() => {
    channel.on('DARK_MODE', setMode)
    return () => channel.removeListener('DARK_MODE', setMode)
  }, [channel, setColorMode])
  return <div />
}

export default ModeSelect
