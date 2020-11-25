import React from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

import './index.less'

function Home()
{
  return (
    <React.Fragment>
      <Header />
      <div className="home-container">
        <Banner />
        <div className="home-container-body">
          <div>Left</div>
          <div>Center</div>
          <div>Right</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
