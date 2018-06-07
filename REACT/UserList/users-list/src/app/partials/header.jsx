import React, { Component } from "react";
import "../../styles/App.css";

const Header = props => {
  return (
    <div className="container-fluid">
      <div className="header row">
        <p className="col-10">Bit Persons</p>

        <i class="fa fa-repeat col-1 my-auto" onClick={props.refresh} />

        {props.selected ? (
          <i onClick={props.change} className="col-1 fa fa-th my-auto" />
        ) : (
          <i onClick={props.change} className="col-1 my-auto fa fa-th-list" />
        )}
      </div>
    </div>
  );
};

export default Header;
