import React, { Component } from "react";
import "../../styles/App.css";

import ItemCard from "./ItemCard";
import ItemList from "./ItemList";

import NoUsers from "./NoUsers";
import SearchBar from "./SearchBar";


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  renderList() {
    const array = this.props.users
      .filter(user => {
        if (this.props.searchString === "") {
          return true;
        } else {
          return user.name.includes(this.props.searchString);
        }
      })
      .map((user, i, arr) => {
        if (this.props.selected) {
          return <ItemList usr={user} />;
        } else {
          return <ItemCard usr={user} />;
        }
      });

    if (array.length === 0) {
      return <NoUsers />;
    } else {
      return array;
    }
  }

  render() {
    return (
      <div className="container">
        <SearchBar handlerSearch={this.props.handlerSearch} />
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

export default UserList;

// const UserList = (props) => {

//     return (

//         <div className="container" >

//             <div className="row">

//                 {props.data.map(user => {

//                     return <ItemList usr={user} />

//                 })}

//             </div>

//         </div>

//     )

// }

// export default UserList
