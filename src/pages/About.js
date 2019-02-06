import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';
import {NavLink} from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div className="page page--about">
                <nav className="nav nav--home">
                    <NavLink exact to="/" activeClassName="active" className="navItem">Home</NavLink>
                    <NavLink to="/blog" activeClassName="active" className="navItem">Blog</NavLink>
                </nav>
                <header className="App-header">
                    <h1>About Page</h1>
                </header>
            </div>
        );
    }
}

export default About;