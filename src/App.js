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
      <div className="container">
        <header>
          <div>
            <NavLink to="/" className="link nav-title" activeClassName="header-active" exact={true}>bee boys</NavLink>
          </div>
          <nav>
            <NavLink to="/" className="link" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/blog" className="link" activeClassName="active">Weekly Updates</NavLink>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/blog">
              <BlogLanding />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
