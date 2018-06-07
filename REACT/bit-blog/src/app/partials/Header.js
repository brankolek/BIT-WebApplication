import React from 'react';
import { Link } from "react-router-dom";





const Header = () => (

    <nav class="navbar navbar-light bg-warning">

        <p>BIT BLOG</p>
        <ul class="nav navbar-nav  ">
            <li class="nav-item links">
                <Link to="/">Home</Link>
            </li>
            <li class="nav-item links">
                <Link to="/authors">Authors</Link>
            </li>
            <li class="nav-item links">
                <Link to="/about">About</Link>
            </li>
        </ul>



    </nav>
)

export default Header;