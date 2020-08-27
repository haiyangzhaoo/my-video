import React from 'react'
import {Link} from 'react-router-dom'
import { Input, Avatar} from 'antd'

import './index.less'

const { Search } = Input

export default function Header()
{
  const titleArr = ['首页', '课程', '职业规划'];

  return (
    <header className="header-container">
      <Link className="logo" to="/">
        <div className="logo-title">学成在线</div>
        <span className="subtitle">在线有我 学有所成</span>
      </Link>
      <div className="title">
          <div className="title-cate">
            {titleArr.map((val, key) => (
              <Link to="/" key={key}>{val}</Link>
            ))}
          </div>
          <div className="search">
            <Search
              placeholder="输入关键词"
              onSearch={val => console.log(val)}
              enterButton
            />
            <Link to="/">个人中心</Link>
          </div>
      </div>
      <div className="user">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span className="user-name">haiyang</span>
      </div>
    </header>
  )
}
