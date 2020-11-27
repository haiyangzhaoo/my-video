import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cates from '@/components/Cates'
import MyCard from '@/components/MyCard'
import { Pagination } from 'antd'

import './index.less'

function Course()
{
  const cates = [
    {
      title: '一级分类',
      list: ['数据分析', '机器学习工程', '前端开发工程', '人工智能工程', '全栈工程师', 'IOS开发工程', 'VR开发', '深度学习', '商业预测'],
      isMore: false,
    },
    {
      title: '二级分类',
      list: ['体系课程', '大数据', '云计算'],
      isMore: true,
    },
    {
      title: '难度等级',
      list: ['初级', '中级', '高级'],
      isMore: false,
    },
  ]

  const courses = []
  for (var i = 0; i < 20; i++) {
    courses.push({
      title: '学习开发就是你最好的出路啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      people: 1325,
      img: 'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDod9cicgx1Uy4X6GIab0lTcSqNMW6d6YvfneEnd1K7pOP0cHChXP9iaZJy33g9J38pk/356',
      isNew: i % 2,
      level: ['高级', '中级', '初级'][i % 3]
    })
  }

  return (
    <React.Fragment>
      <Header />
      <div className="courses-container">
        <div className="courses-cates">
          <div>
            {cates.map((val, key) => <Cates key={key} data={val} />)}
          </div>
        </div>
        <div className="courses-container-body">
          <div></div>
          <div>
            <div className="courses-container-body-left">
              <div className="courses-container-body-left-head">
                <div className="courses-left-head-rec">
                  <span className="active">推荐</span>
                  <span>最新</span>
                  <span>热评</span>
                </div>
                <div className="courses-left-head-page">
                  《<span> 1/28 </span>》
                </div>
              </div>
              <div className="courses-container-body-left-body">
                  {
                    courses.map((val, key) => {
                      return <MyCard key={key} data={val} />
                    })
                  }
              </div>
              <Pagination defaultCurrent={6} total={500} />
            </div>
            <div className="courses-container-body-right">
              <div className="courses-top">
                <h2>精品TOP榜</h2>
                <div className="courses-top-desc">
                  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own
                </div>
                <div className="courses-top-cou">
                  <h3>前端技术爱好者项目实战-React</h3>
                  <span><i>高级</i> · 1125人在学习</span>
                </div>
                <div className="courses-top-cou">
                  <h3>前端技术爱好者项目实战-React</h3>
                  <span><i>高级</i> · 1125人在学习</span>
                </div>
                <div className="courses-top-cou">
                  <h3>前端技术爱好者项目实战-React</h3>
                  <span><i>高级</i> · 1125人在学习</span>
                </div>
              </div>
              <div className="courses-top">
                <h2>精品TOP榜</h2>
                <div className="courses-top-desc">
                  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own
                </div>
                <div className="courses-top-cou">
                  <h3>前端技术爱好者项目实战-React</h3>
                  <span><i>高级</i> · 1125人在学习</span>
                </div>
                <div className="courses-top-cou">
                  <h3>前端技术爱好者项目实战-React</h3>
                  <span><i>高级</i> · 1125人在学习</span>
                </div>
                <div className="courses-top-cou">
                  <h3>前端技术爱好者项目实战-React</h3>
                  <span><i>高级</i> · 1125人在学习</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Course
