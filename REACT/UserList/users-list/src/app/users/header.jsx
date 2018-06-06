import React, {
    Component
} from 'react';
import './App.css';
import SearchBar from './searchBar';


const Header = (props) => {

    return (

        <div className="container-fluid">

            <div className="header row">


                <p className="col-10">Bit Persons</p>

                <i class="fa fa-repeat col-1 my-auto" onClick={props.refresh}></i>


                {props.selected ? <i onClick={props.change} className="col-1 fa fa-th my-auto" ></i> : <i onClick={props.change} className="col-1 my-auto fa fa-th-list" ></i>}










            </div>
        </div >

    )

}


export default Header