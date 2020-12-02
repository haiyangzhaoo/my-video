import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {Button} from 'antd'

import './index.less'

export default function ErrorPage()
{
  return (
    <div className="error_container">
      <Header />
      <div className="error_content">
        <Button danger size="large" href="/app.html#/">
          Error Page
        </Button>
      </div>
      <Footer />
    </div>
  )
}
