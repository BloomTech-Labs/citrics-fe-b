import React from 'react'

import Header from './components/common/Header'
import Home from './components/pages/Home'
import { Route, Redirect, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
