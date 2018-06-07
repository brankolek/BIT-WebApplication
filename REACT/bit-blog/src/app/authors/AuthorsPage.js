import React from 'react';
import { Link } from "react-router-dom";

const Authors = () => (
    <div>

        <h1>Authors</h1>
        <Link to="/authors/id"> <div>Name Surname</div></Link>
        <div>Name Surname</div>
        <div>Name Surname</div>
        <div>Name Surname</div>
    </div>
);

export default Authors;