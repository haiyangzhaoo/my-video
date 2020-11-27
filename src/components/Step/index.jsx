import React from 'react'
import MyCard from '../MyCard'
import { Progress } from 'antd'

import './index.less'

export default function Step()
{
  const data = {
    name: '初级工程师',
    img: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3531671336,3780835954&fm=26&gp=0.jpg',
    title: '从零基础入门到快速搭建企业级网页',
    people: '零基础，感兴趣的学员',
    mudi: '从零基础入门到快速搭建企业级网页从零基础入门到快速搭建企业级网页从零基础入门到快速搭建企业级网页从零基础入门到快速搭建企业级网页从零基础入门到快速搭建企业级网页从零基础入门到快速搭建企业级网页从零基础入门到快速搭建企业级网页'
  }

  return (
    <div className="step-container">
      <div className="step-info">
        <h3>{data.name}</h3>
        <img src={data.img} title="name" alt="pic" />
      </div>
      <div className="step-intro">
        <h3>{data.title}</h3>
        <div className="step-intro-peo">
          <p>适合人群：</p>
          <p>{data.people}</p>
        </div>
        <div className="step-intro-peo">
          <p>学习目标：</p>
          <p>{data.mudi}</p>
        </div>
        <div className="step-intro-price">
          <span>阶段价格 <i>¥999</i></span>
          <span>原价 <i>¥1799</i></span>
        </div>
      </div>
      <div className="step-course">
        <div className="step-course-info">
          <MyCard data={{
            title: '学习开发就是你最好的出路啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            people: 1325,
            img: 'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDod9cicgx1Uy4X6GIab0lTcSqNMW6d6YvfneEnd1K7pOP0cHChXP9iaZJy33g9J38pk/356',
            isNew: true,
            level: '高级'
          }} />
          <MyCard data={{
            title: '学习开发就是你最好的出路啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            people: 1325,
            img: 'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDod9cicgx1Uy4X6GIab0lTcSqNMW6d6YvfneEnd1K7pOP0cHChXP9iaZJy33g9J38pk/356',
            isNew: true,
            level: '高级'
          }} />
        </div>
        <Progress percent={30} />
      </div>
    </div>
  )
}
