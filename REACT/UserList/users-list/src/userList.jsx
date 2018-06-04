import React, {
    Component
} from 'react';
import './App.css';
import './data'
import usersData from './data';
import ItemCard from "./itemCard"
import ItemList from "./ItemList"





const split = (date) => {

    date.split(date.indexOf(" "))
}

// console.log(usersData);
const UserList = (props) => {


    return (


        <div className="container" >

            <div className="row">


                {props.data.map(user => {

                    return <ItemCard usr={user} />



                })}


            </div>


        </div>


    )

}

export default UserList