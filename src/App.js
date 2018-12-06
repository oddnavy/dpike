import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Analytics from './components/Analytics'
import './app.css'

const App = () => (
  <Router>
    <Analytics id="UA-119176449-1">
      <Routes />
    </Analytics>
    <Routes />
  </Router>
)

export default hot(module)(App)
