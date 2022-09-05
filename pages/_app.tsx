import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider, Container, Image } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        as='main'
        minW='100%'
        minH='100vh'
        pb={8}
      >
        <Fonts />
        <Navbar />
        <Container maxW='container.md' pt={16}>
          <Image src='/Welcome.png' alt='Welcome' mx='auto' />
          <AnimatePresence
            exitBeforeEnter
            initial={true}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
