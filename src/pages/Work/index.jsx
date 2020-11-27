import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Like from '@/components/Like'
import Step from '@/components/Step'

import './index.less'

function Work()
{
  return (
    <React.Fragment>
      <Header />
      <div className="work-container">
        <div className="work-container-top"></div>
        <div className="work-container-body">
          <div>
            <Like />
            <Step />
            <Step />
            <Step />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Work
