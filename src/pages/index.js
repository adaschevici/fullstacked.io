import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Layout from '../global/Layout'
import Hero from '../components/hero'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Parallax pages={3}>
      <Hero />
      <Footer />
    </Parallax>
  </Layout>
)

export default IndexPage
