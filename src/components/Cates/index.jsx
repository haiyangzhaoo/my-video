import React from 'react'
import { Collapse } from 'antd'

import './index.less'

const { Panel } = Collapse

export default function Cates(props)
{
  const {data} = props

  function callback(key) {
    console.log(key);
  }

  const itemRender = () => {
    return (
      <div className="cates-container">
        <h3>{data.title}：</h3>
        <div className="cates-lists">
          <span className="active">全部</span>
          {
            data.list.map((val, key) => <span key={key}>{val}</span>)
          }
        </div>
        {/*data.isMore ? <span>更多</span> : null*/}
      </div>
    )
  }

  return (
    <React.Fragment>
      {data.isMore ? (
        <div className="cates-container">
          <Collapse onChange={callback} expandIconPosition="right">
            <Panel header={itemRender()} key="1">
            <div className="cates-lists">
              {
                data.list.map((val, key) => <span key={key}>{val}</span>)
              }
            </div>
            </Panel>
          </Collapse>
        </div>
      ) :itemRender()}
    </React.Fragment>
  )
}
