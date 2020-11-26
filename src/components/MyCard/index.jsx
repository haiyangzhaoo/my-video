import React from 'react'
import {Card} from 'antd'

import './index.less'

const { Meta } = Card

export default function MyCard(props)
{
  const {data} = props

  return (
    <div className="mycard-container">
      <Card
        hoverable
        style={{ width: 180, height: 175, overflow: 'hidden' }}
        cover={<img alt="example" src={data.img} />}
      >
        <Meta title={data.title} description={`${data.level} · ${data.people}人在学习`} />
      </Card>
    </div>
  )
}
