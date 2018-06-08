import React, { Component } from "react";
import blogsService from "../../services/blogsService";
import AuthorName from "./AuthorName";
import OtherBlogs from "./OtherBlogs";
import { Link } from "react-router-dom"
import BackButton from "../partials/BackButton";


class SinglePostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null
    };
  }

  componentWillReceiveProps(newProps) {
    this.loadPost(newProps.match.params.id);
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.id);
  }

  loadPost(id) {
    blogsService.getBlogData(id).then(data => {
      this.setState({
        blog: data
      });
    });
  }

  render() {
    return this.state.blog ? (
      <div className="container-fluid">

        <BackButton />
        <h1 className="text-center display-4">{this.state.blog.title.split(" ").slice(0, Math.ceil(Math.random() * 3)).join(" ")}</h1>
        <AuthorName userId={this.state.blog.userId} />
        <p className="text-center" >{this.state.blog.body.repeat(10)}</p>
        <hr />
        <OtherBlogs userId={this.state.blog.userId} />
      </div>
    ) : (
        <h1>loading</h1>
      );

  }
}

export default SinglePostPage;
