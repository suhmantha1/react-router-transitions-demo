import React, { Component } from 'react';
import Page from './Page';
import '../App.scss';
import {NavLink} from "react-router-dom";

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
                </div>
            </Page>
        );
    }
}

export default Blog;