import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Home from './components/pages/Home'
import Compare from './components/pages/Compare'
import Footer from './components/common/FooterBar'
import UserProfile from './components/pages/ProfileList/Profile'

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/compare">
            <Compare />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App
