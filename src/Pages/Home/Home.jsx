import React from 'react'
import Layout from '../../Layout/Layout'
import HeroBanner from './Components/HeroBanner/HeroBanner'

const Home = () => {
  return (
    <Layout>
        <div className='page-container'>
          <HeroBanner />
        </div>
    </Layout>
  )
}

export default Home