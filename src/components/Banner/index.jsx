import React, {useState} from 'react'

import './index.less'

export default function Banner()
{
  const [langues] = useState([
    '前端开发', '后端开发', '移动开发', '人工只能', '商业预料', '云计算&大数据', 'UI设计', '产品'
  ])
  const [imgs]    = useState([
    '//img.mukewang.com/5fbdc05900019c9b18720764.jpg',
    '//img.mukewang.com/5fbdbbf400016bca17920764.jpg',
    '//img.mukewang.com/5fbb1c670001b5a317920764.jpg',
    '//img.mukewang.com/5fb1e1870001af9818720764.jpg',
    '//img.mukewang.com/5facde180001f82518720764.jpg',
    '//img.mukewang.com/5facde180001f82518720764.jpg',
    '//img.mukewang.com/5f9a70870001f4f918720764.jpg',
  ])

  return (
    <div className="banner-container">
      <div>
      <div className="container-xxxx">
       <ul>
         <li>信息内容一</li>
         <li>信息内容二</li>
       </ul>
      </div>
      </div>
    </div>
  )
}
