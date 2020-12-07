import React, {useState} from 'react'
import {Carousel} from 'antd'
import Course from './Course'

import './index.less'

export default function Banner()
{
  const [langues] = useState([
    '前端开发', '后端开发', '移动开发', '人工只能', '商业预料', '云计算&大数据', 'UI设计', '产品'
  ])
  const [imgs]    = useState([
    'https://img.mukewang.com/5fbdc05900019c9b18720764.jpg',
    'https://img.mukewang.com/5fbdbbf400016bca17920764.jpg',
    'https://img.mukewang.com/5fbb1c670001b5a317920764.jpg',
    'https://img.mukewang.com/5fb1e1870001af9818720764.jpg',
    'https://img.mukewang.com/5facde180001f82518720764.jpg',
    'https://img.mukewang.com/5facde180001f82518720764.jpg',
    'https://img.mukewang.com/5f9a70870001f4f918720764.jpg',
  ])

  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <div className="banner-container">
      <div className="banner-container-slider">
        <div className="banner-container-slider-slide">
          <Carousel autoplay>
            {imgs.map((val, key) => (
              <div key={key}>
                <div style={{backgroundImage: `url(${val})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: "300px"}}>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="banner-container-slider-course">
          <Course data={langues} />
        </div>
      </div>
    </div>
  )
}
