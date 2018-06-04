import React, {
    Component
} from 'react';
import './App.css';
import PropTypes from "prop-types"


const ItemList = (props) => {
    return (


        <div className="userItem"  >
            <img className="userImg" src={props.usr.picture.medium} alt="" />

            <div className="userData">
                <p>name: {props.usr.name.first}</p>
                <p>email: {props.usr.email}</p>
                <p>date of birth: {props.usr.dob}</p>
            </div>
        </div>



    )


}


export default ItemList
