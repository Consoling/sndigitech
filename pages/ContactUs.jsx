import React from 'react'
import { Helmet } from 'react-helmet'
import ContactContent from '../src/components/ContactContent'
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title className=''>Contact Us | SN Digitech</title>
      
      </Helmet>
      <ContactContent />

    </div>
  )
}

export default ContactUs