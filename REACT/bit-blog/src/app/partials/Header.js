import React from 'react';
import { Link } from "react-router-dom";
import "../styles/header.css"





const Header = () => (

    <nav class="navbar navbar-light header">

        <p className="text-primary">BIT BLOG</p>
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