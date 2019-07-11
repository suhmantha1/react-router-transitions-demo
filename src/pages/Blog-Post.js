import React, { Component } from 'react';
import Page from './Page';
import '../App.scss';
import {NavLink} from "react-router-dom";
import lucy from '../assets/images/nap.jpg';

class BlogPost extends Component {
    render() {
        return (
            <Page pageName='blog-post'>
                <div className="blog-post">
                    <nav className="nav nav--blog-post">
                        <NavLink exact to="/blog" activeClassName="active" className="navItem">BACK TO BLOG</NavLink>
                    </nav>
                    <header className="post-header">
                        <h1>Update: Lucy Likes Napping</h1>
                        <h2>She is literally the best, but also literally the cutest!</h2>
                    </header>
                    <main className="post">
                        <img src={lucy} />
                    </main>
                </div>
            </Page>
        );
    }
}

export default BlogPost;