import Awards from '@/components/Awards'
import Banner from '@/components/Banner'
import Blogs from '@/components/Blogs'
import Clients from '@/components/Clients'
import PressRelease from '@/components/PressRelease'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <Awards />
      <Services />
      <Clients />
      <PressRelease />
      <Blogs />
    </div>
  )
}

export default Home