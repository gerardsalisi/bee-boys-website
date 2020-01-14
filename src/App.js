import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from 'components/Home';
import BlogLanding from 'components/Blog';
import Footer from 'components/Footer';

function App() {
  return (
    <Router basename="/bee-boys-website/">
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
              <NavLink to="/blog" className="link" activeClassName="active">Weekly Updates</NavLink>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/blog">
            <BlogLanding />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;
