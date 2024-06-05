import React from 'react'
import AboutContent from '../src/components/AboutContent'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title className=''>About Us | SN Digitech</title>
      
      </Helmet>
      <AboutContent />
    </div>
  )
}

export default About