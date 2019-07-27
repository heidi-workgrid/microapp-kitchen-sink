import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Summary from './pages/Summary'
import Detail from './pages/Detail'

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Summary} />
      <Route path="/detail" component={Detail} />
    </Router>
  )
}

export default App
