import React from 'react'

import './index.less'

export default function Cates(props)
{
  const {data} = props

  return (
    <div className="cates-container">
      <h3>{data.title}：</h3>
      <div className="cates-lists">
        <span className="active">全部</span>
        {
          data.list.map((val, key) => <span key={key}>{val}</span>)
        }
      </div>
      {data.isMore ? <span>更多</span> : null}
    </div>
  )
}
