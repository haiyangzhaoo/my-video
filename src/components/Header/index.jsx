import React, {useState, useEffect} from 'react'
import {SearchOutlined} from '@ant-design/icons'
import './index.less'

export default function Header(props) {
  const [tags] = useState(
    [
      {
        title: '首页',
        route: '/'
      },
      {
        title: '课程',
        route: '/course'
      },
      {
        title: '职业规划',
        route: '/work'
      }
    ]
  )
  const [routeStr, setRouteStr] = useState('/')
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    let hashStr = window.location.hash
    let leftPos = hashStr.indexOf('#')
    let rightPos = hashStr.indexOf('?')
    if (rightPos != -1) {
      setRouteStr(hashStr.substring(leftPos+1, rightPos))
    } else {
      setRouteStr(hashStr.substring(leftPos+1))
    }

    window.onkeyup = (e) => {
      if (e.keyCode == 13) handleSearch()
    }
  })

  const handleSearch = () => {
    // 写请求数据的逻辑
    console.log(inputVal)
  }

  return (
    <header className="header-container">
      <div className="header-container-left">
      </div>
      <div className="header-container-wrap">
        <div className="tabs">
          {
            tags.map((val, key) => {
              return (
                <a key={key} href={val.route}>
                  <span className={routeStr == val.route ? "line" : ""}>{val.title}</span>
                </a>
              )
            })
          }
        </div>
        <div className="search">
          <div className="search-input">
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
            <span onClick={handleSearch}><SearchOutlined /></span>
          </div>
          <a href="/">
            个人中心
          </a>
        </div>
      </div>
      <div className="header-container-right">
        <div><img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3531671336,3780835954&fm=26&gp=0.jpg" /></div>
        <span>qq-feishui</span>
      </div>
    </header>
  )
}
