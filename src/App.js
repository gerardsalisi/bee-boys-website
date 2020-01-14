import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from 'components/Home';
import Blog from 'components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="header">
          <div className="header-name">
            <h1>bee boys</h1>
          </div>
          <div className="nav">
            <div>
              <NavLink to="/" className="link" activeClassName="active" exact={true}>Home</NavLink>
            </div>
            <div>
              <NavLink to="/blog" className="link" activeClassName="active">Updates</NavLink>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
