import React from 'react'

import './index.less'

export default function Like()
{
  const likes = [
    '精品推荐', 'Jquery', 'PHP', 'Mysql', 'JAVA', 'JavaScript'
  ]

  return (
    <div className="like-container">
      <div className="like-container-jishu">
        {likes.map((val, key) => (
          <a href="#" key={key}>
            <span>{val}</span>
          </a>
        ))}
      </div>
      <div className="like-container-mod">
        <a href="#">
          修改兴趣
        </a>
      </div>
    </div>
  )
}
