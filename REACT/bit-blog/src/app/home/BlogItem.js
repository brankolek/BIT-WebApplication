import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link to={`/posts/${this.props.id}`} style={{ textDecoration: 'none' }}>
        <div className="row justify-content-center">
          <div className="col-6">
            <li className="list-group-item list-group-item-action ">
              <h2 className="ml-5" > {this.props.title.split(" ").slice(0, Math.ceil(Math.random() * 3)).join(" ")} </h2>
              <p className="text-muted text-center"> {`${this.props.text.slice(0, 80)}...`} </p>
            </li>
          </div>
        </div>
      </Link>
    );
  }
}

export default BlogItem;
