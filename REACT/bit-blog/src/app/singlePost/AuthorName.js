import React, { Component } from "react";
import authorService from "../../services/authorsService";

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
    return <h2>{this.state.name}</h2>;
  }
}

export default AuthorName;
