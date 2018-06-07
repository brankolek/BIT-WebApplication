import React, { Component } from "react";
import "../../styles/App.css";
import PropTypes from "prop-types";

// const itemListclass = (props) => {

//     if (props.usr.gender === "male") {

//         return "userItem row justify-content-start"
//     } else {

//         return "userItem row justify-content-start red"
//     }

// }

const ItemList = props => {
  let cls =
    props.usr.gender === "male"
      ? "userItem row justify-content-start"
      : "userItem row justify-content-start red";
  return (
    <div className={cls}>
      <div className="col-4 ">
        {" "}
        <img className="userImg" src={props.usr.mediumPic} alt="" />
      </div>

      <div className="userData col-4">
        <p>name: {props.usr.name}</p>
        <p>email: {props.usr.email}</p>
        <p>date of birth: {props.usr.dateOfBirth}</p>
      </div>
    </div>
  );
};

export default ItemList;
