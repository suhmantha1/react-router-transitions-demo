import React from 'react';
import { Switch, Route } from 'react-router';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/Blog-Post';

let fromPage = window.location.pathname.replace('/', '');
if (!fromPage) {
    fromPage = 'home';
} else if (fromPage.indexOf('blog/') >= 0) {
    fromPage = 'post'
}

class App extends React.Component {
    pageClass = 'App from-page--' + fromPage;
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            let prevPage = prevProps.location.pathname.replace('/', '');
            if (prevPage.indexOf('blog/') >= 0) {
                prevPage = 'post'
            }
            fromPage = prevPage ? prevPage : 'home';
            this.pageClass = 'App from-page--' + fromPage;

            // This function is called after template is rendered, so force update to get correct class
            this.forceUpdate();

        }
    };

  render() {
    return (
      <div className={`App from-page--${fromPage}`}>
          <Route render={({location}) => (
              <TransitionGroup>
                  <CSSTransition
                      key={location.pathname}
                      timeout={{
                          enter: 1000,
                          exit: 1000,
                      }}
                      classNames="page">
                      <Switch location={location}>
                          <Route exact path="/" component={Home} className="test"/>
                          <Route path="/about" component={About}/>
                          <Route exact path="/blog" component={Blog}/>
                          <Route path={`/blog/:post`} component={BlogPost}/>
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
