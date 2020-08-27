import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from '@/pages/Home'
import Course from '@/pages/Course'

export default function router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/course" component={Course} />
      </Switch>
    </HashRouter>
  )
}
