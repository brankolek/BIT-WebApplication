import React, { Component } from "react";
import authorService from "../../services/authorsService";
import { Link } from "react-router-dom"

class AuthorName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  componentDidMount() {
    authorService.getUserData(this.props.userId).then(data => {
      this.setState({
        name: data.name
      });
    });
  }
  render() {
    return <Link to={`/authors/${this.props.userId}`}><h3 className="text-center" >{this.state.name}</h3></Link>;
  }
}

export default AuthorName;
