import React, { Component } from 'react';
import Page from './Page';
import '../App.scss';
import {NavLink} from "react-router-dom";
import { Route } from 'react-router';
import BlogPost from './Blog-Post'

class Blog extends Component {
    render() {
        return (
            <Page pageName='blog'>
                <div className="page--blog">
                    <nav className="nav nav--home">
                        <NavLink to="/about" activeClassName="active" className="navItem">About</NavLink>
                        <NavLink exact to="/" activeClassName="active" className="navItem">Home</NavLink>
                    </nav>
                    <header className="App-header">
                        <h1>Blog Page</h1>
                    </header>
                    <main>
                        <NavLink to={`/blog/lucy`} className="post-link">Read this blog post!</NavLink>
                        <Route path={`blog/:post`} component={BlogPost}/>
                    </main>
                </div>
            </Page>
        );
    }
}

export default Blog;