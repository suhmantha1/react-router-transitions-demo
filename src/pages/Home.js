import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import lucy from '../assets/images/lucy.jpeg';
import '../App.scss';

class Home extends Component {
    render() {
        return (
            <div className="page page--home" style={{backgroundImage: `url(${lucy})`}}>
                <nav className="nav nav--home">
                    <NavLink to="/blog" activeClassName="active" className="navItem">Blog</NavLink>
                    <NavLink to="/about" activeClassName="active" className="navItem">About</NavLink>
                </nav>
                <h1 className="title">My Cat Lucy</h1>
            </div>
        );
    }
}

export default Home;