import React from 'react'

import './index.less'

export default function Footer()
{
  return (
    <div className="footer-container">
      <div className="footer-desc">
        <span>前端 · 技术</span>
        <span><a href="https://www.jianshu.com/u/4acdabf039ca">简书</a></span>
        <span><a href="https://juejin.cn/user/3491704660036846">掘金</a></span>
        <span><a href="https://segmentfault.com/u/haiyangzhao">思否</a></span>
        <span><a href="https://github.com/haiyangzhaoo">gitHub</a></span>
      </div>
      <div className="footer-info">
        <span>©2020 My-video</span>
        <span>(京)-经营性-2017-0020</span>
        <span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000002">京公网安备11000002000002号</a></span>
        <span>京ICP证030173号</span>
      </div>
    </div>
  )
}
