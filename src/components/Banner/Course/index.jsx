import React from 'react'

import './index.less'

export default function Course(props)
{

  return (
    <div className="course-container">
      {props.data && props.data.map((val, key) => (
        <a key={key} href="/">
          <span className={!key ? "active" : ""}>{val}</span>
        </a>
      ))}
    </div>
  )
}
