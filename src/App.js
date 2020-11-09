import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/common/NavBar';
import Home from './components/pages/Home';
import Compare from './components/pages/Compare';
import Footer from './components/common/FooterBar';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
            <UserProfile />
          </Route>
          <Route path="/compare">
            <Compare />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
