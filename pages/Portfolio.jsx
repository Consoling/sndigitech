import React from 'react'
import PortfolioContent from '../src/components/PortfolioContent'
import { Helmet } from 'react-helmet'

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title className=''>Portfolio | SN Digitech</title>
      
      </Helmet>

      <PortfolioContent />
    </div>
  )
}

export default Portfolio