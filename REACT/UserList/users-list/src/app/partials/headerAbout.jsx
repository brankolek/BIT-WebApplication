import React from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";

const HeaderAbout = () => {
  return (
    <div className="container-fluid">
      <div className="header row">
        <p className="col-10">Bit Persons</p>
        <Link to="/" className="col-2">
          Users
        </Link>
      </div>
    </div>
  );
};

export default HeaderAbout;
