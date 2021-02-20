import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul className="flex flex-row justify-evenly">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/posts">Posts</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;