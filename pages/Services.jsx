import React from 'react'
import { Helmet } from 'react-helmet'
import ServiceContent from '../src/components/ServiceContent'
const Services = () => {
  return (
    <div>
       <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title className=''>Services | SN Digitech</title>
      
      </Helmet>
      <ServiceContent />
    </div>
  )
}

export default Services