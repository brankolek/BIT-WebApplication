import React from 'react';
import { Link } from "react-router-dom";





const Header = () => (

    <nav class="navbar navbar-light bg-warning">

        <p>BIT BLOG</p>
        <ul className=" list-inline">
            <li class="list-inline-item border-right border-dark pr-3">
                <Link to="/">Home</Link>
            </li>
            <li class="list-inline-item border-right border-dark pr-3">
                <Link to="/authors">Authors</Link>
            </li>
            <li class=" list-inline-item ">
                <Link to="/about">About</Link>
            </li>
        </ul>



    </nav>
)

export default Header;