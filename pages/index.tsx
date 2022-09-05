import { Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Rocket from '../components/rocket'
import Hobbies from '../components/hobbies'
import Social from '../components/social'
import About from '../components/about'
import Technologies from '../components/technologies'
import Layout from '../components/layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <Rocket />
      <About />
      <Technologies />
      <Hobbies />
      <Social />
    </Layout>
  )
}

export default Home
