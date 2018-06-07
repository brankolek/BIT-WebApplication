import React from 'react';
import { Link } from "react-router-dom";



const Header = () => (

    <nav class="navbar navbar-light bg-warning">

        <p>RND Blog</p>
        <ul class="navbar-nav ">
            <li class="nav-item active">
                <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/authors">Authors</Link>
            </li>
            <li class="nav-item">
                <Link to="/about">About</Link>
            </li>
        </ul>



    </nav>
)

export default Header;