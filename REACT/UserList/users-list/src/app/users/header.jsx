import React, {
    Component
} from 'react';
import './App.css';


const Header = (props) => {

    return (

        <div className="container-fluid">

            <div className="header row">


                <p className="col-10">Bit Persons</p>

                <i class="fa fa-repeat col-1" onClick={props.refresh}></i>


                {props.selected ? <i onClick={props.change} className="col-1 align-middle fa fa-th" ></i> : <i onClick={props.change} className="col-1 align-middle fa fa-th-list" ></i>}










            </div>
        </div >

    )

}


export default Header