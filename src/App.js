import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import Detail from './pages/Detail'

const App = () => {
  console.log('Initialized')
  return (
    <Router basename="/microapp-kitchen-sink">
      <Route path="/" exact component={Summary} />
      <Route path="/detail" component={Detail} />
    </Router>
  )
}

export default App
