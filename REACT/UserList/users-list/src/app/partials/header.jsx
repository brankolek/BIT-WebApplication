import React from "react";
import "../../styles/App.css";
import { Link } from "react-router-dom";


const Header = props => {
  return (
    <nav className="navbar navbar-dark bg-secondary justify-content-between">
      <div className="container">
        <p className="navbar-brand">Bit Persons</p>

        <Link to="/about" className="" >About</Link>

        <i class="fa fa-repeat  my-auto" onClick={props.refresh} />

        {props.selected ? (
          <i onClick={props.change} className="fa fa-th my-auto" />
        ) : (
            <i onClick={props.change} className="my-auto fa fa-th-list" />
          )}
      </div>
    </nav>

  );
};

export default Header;
