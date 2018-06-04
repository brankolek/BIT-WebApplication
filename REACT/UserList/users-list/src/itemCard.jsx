import React, {
    Component
} from 'react';
import './App.css';
import PropTypes from "prop-types"

const hide = (email) => {
    let begin = email.indexOf("@")

    let mail = email.slice(0, 3) + "..." + email.slice(begin)


    return mail



}
const ItemCard = (props) => {
    return (

        <div class="card col-4">

            <img class="card-img-top" src={props.usr.picture.large} alt="Card image cap" />
            <div class="card-body">

                <p class="card-text">email: {hide(props.usr.email)}</p>
                <p class="card-text">Date od birth: {props.usr.dob}</p>

            </div>
        </div>




    )


}




export default ItemCard
