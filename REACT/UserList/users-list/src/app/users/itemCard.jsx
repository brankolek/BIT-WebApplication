import React from "react";
import "../../styles/App.css";


const hide = email => {
  let begin = email.indexOf("@");

  let mail = email.slice(0, 3) + "..." + email.slice(begin);

  return mail;
};



const ItemCard = props => {
  let cls = props.usr.gender === "male" ? "card col-4" : "card col-4 red";
  return (
    <div class={cls}>
      <img class="card-img-top" src={props.usr.largePic} alt="" />
      <div class="card-body">
        <p class="card-text">email: {hide(props.usr.email)}</p>
        <p class="card-text">Date od birth: {props.usr.dateOfBirth}</p>
      </div>
    </div>
  );
};

export default ItemCard;
