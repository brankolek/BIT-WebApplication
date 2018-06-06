import React, { Component } from 'react';
import './App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <form className="form-inline my-5 my-lg-0">

                <input className="form-control mr-sm-2 my-3 searchBar" type="search" placeholder="Search" aria-label="Search" onChange={this.props.handlerSearch} />
            </form>


        );
    }
}

export default SearchBar;