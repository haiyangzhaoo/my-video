import React from 'react'

import './index.less'

export default function Left()
{
  const skills = [
    '编程入门', '数据分析师', 'DBA工程师', '产品运营专家', '高级技术专家', '技术专家', 'IOS开发工程师', '前端开发工程师', '大数据专家', '云计算专家'
  ];

  return (
    <div className="left-container">
      {
        skills.map((val, key) => <span key={key}>{val}</span>)
      }
    </div>
  )
}
