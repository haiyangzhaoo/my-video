import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from '@/pages/Home'
import Course from '@/pages/Course'
import Work from '@/pages/Work'
import ErrorPage from '@/pages/ErrorPage'

export default function router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/course" component={Course} />
        <Route path="/work" component={Work} />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter>
  )
}
