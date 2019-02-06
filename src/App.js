import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.currentPage = null;
    }

    determineTransition(location) {
        // TODO transitions based on page relations
        // Compare current and new state to determine transition
        if (!this.currentPage) {
            // initial page load
            this.currentPage = location.pathname;
            return 'slide-right'; // TODO
        }

        const currentPage = this.currentPage;
        const newPage = location.pathname;

        if (currentPage === '/' && newPage === '/blog') {
            return 'slide-right';
        } else if (currentPage === '/' && newPage === '/about') {
            return 'slide-left';
        }

        return 'fade';
    }

  render() {
    return (
      <div className="App">
        {/*<nav className="nav">*/}
            {/*<NavLink exact to="/" activeClassName="active">Home</NavLink>*/}
            {/*<NavLink to="/about" activeClassName="active">About</NavLink>*/}
        {/*</nav>*/}
          <Route render={({location}) => (
              <TransitionGroup>
                  <CSSTransition
                      key={location.key}
                      timeout={450}
                      classNames="fade">
                      <Switch location={location}>
                          <Route exact path="/" component={Home}/>
                          <Route path="/about" component={About}/>
                          <Route path="/blog" component={Blog}/>
                          <Route path="/blog/:post" component={Home}/>
                          <Route component={Home}/>
                      </Switch>
                  </CSSTransition>
              </TransitionGroup>
          )} />
      </div>
    );
  }
}

export default App;
