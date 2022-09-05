// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    }
  })
}

const fonts = {
  heading: `'Be Vietnam Pro'`,
  text: `'Be Vietnam Pro'`
}

// 3. extend the theme
const theme = extendTheme({ config, fonts, styles })

export default theme