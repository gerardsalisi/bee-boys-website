import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';

import Home from 'components/Home';
import BlogLanding from 'components/Blog';
import Footer from 'components/Footer';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};


function App() {
  return (
    <Router basename="/pollimate-website/">
      <div className="container">
        <header>
          <div>
            <NavLink to="/" className="link nav-title" activeClassName="header-active" exact={true}>PolliMate</NavLink>
          </div>
          <nav>
            <NavLink to="/" className="link" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/blog" className="link" activeClassName="active">Weekly Updates</NavLink>
          </nav>
        </header>
        <main>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route path="/blog">
              <BlogLanding />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </AnimatedSwitch>
        </main>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
