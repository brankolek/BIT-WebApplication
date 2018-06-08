import React, { Component } from "react";
import blogsService from "../../services/blogsService";

class OtherBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      other: []
    };
  }

  componentDidMount() {
    blogsService.getBlogsFromAuthor().then(data => {
      this.setState({
        other: data
      });
    });
  }
  render() {
    return <div>{this.state.other}</div>;
  }
}

export default OtherBlogs;
