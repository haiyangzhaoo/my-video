import React from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Like from '@/components/Like'
import MyCard from '@/components/MyCard'
import StudyRoad from '@/components/StudyRoad'
import Footer from '@/components/Footer'
import Left from '@/components/Left'

import './index.less'

function Home()
{
  const courses = []
  for (var i = 0; i < 10; i++) {
    courses.push({
      title: '学习开发就是你最好的出路啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
      people: 1325,
      img: 'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDod9cicgx1Uy4X6GIab0lTcSqNMW6d6YvfneEnd1K7pOP0cHChXP9iaZJy33g9J38pk/356',
      isNew: i % 2,
      level: ['高级', '中级', '初级'][i % 3]
    })
  }

  console.log('courses', courses)

  return (
    <React.Fragment>
      <Header />
      <div className="home-container">
        <Banner />
        <div className="home-container-body">
          <div><Left className="home-left" /></div>
          <div>
            <div>
              <Like />
            </div>
            <div className="home-cards">
              <div className="home-cards-header">
                <span>精品推荐</span>
                <a href="#">查看全部</a>
              </div>
              <div className="home-cards-courses">
                  {
                    courses.map((val, key) => {
                      return <MyCard key={key} data={val} />
                    })
                  }
              </div>
            </div>
            <div className="home-data">
              <div className="home-data-header">
                <span>编程入门</span>
                <div>
                  {
                    ['热门', '初级', '中级', '高级'].map((val) => (
                      <span key={val}>{val}</span>
                    ))
                  }
                </div>
                <a href="#">查看全部</a>
              </div>
              <div className="home-data-body">
                <div className="home-data-body-left">
                  <StudyRoad />
                </div>
                <div className="home-data-body-right">
                  <div className="home-data-body-right-top">
                    {/*
                      <img src="//image.zhangxinxu.com/image/blog/202009/interview2020-8.png" />
                      */}
                  </div>
                  <div className="home-data-body-right-bottom">
                    {
                      courses.map((val, key) => {
                        return key < 8 ? <MyCard key={key} data={val} /> : null
                      })
                    }
                  </div>
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

export default Home
