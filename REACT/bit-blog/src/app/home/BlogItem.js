import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to={`/posts/${this.props.id}`}>
        <li className="list-group-item list-group-item-action ">
          <h2> {this.props.title} </h2>
          <p> {this.props.text} </p>
        </li>
      </Link>
    );
  }
}

export default BlogItem;
