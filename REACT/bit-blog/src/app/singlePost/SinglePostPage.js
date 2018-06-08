import React, { Component } from "react";
import blogsService from "../../services/blogsService";
import AuthorName from "./AuthorName";
import OtherBlogs from "./OtherBlogs";

class SinglePostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null
    };
  }

  componentDidMount() {
    blogsService.getBlogData(this.props.match.params.id).then(data => {
      this.setState({
        blog: data
      });
    });
  }

  render() {
    return this.state.blog ? (
      <div>
        <h1>{this.state.blog.title}</h1>
        <AuthorName userId={this.state.blog.userId} />
        <p>{this.state.blog.body}</p>
        <OtherBlogs userId={this.state.blog.userId} />
      </div>
    ) : (
      <h1>loading</h1>
    );
    //   <div>
    //     <h1>Post Title 1</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
    //       voluptate debitis adipisci vel sapiente aliquam culpa obcaecati
    //       expedita mollitia delectus ad, odit cupiditate quod optio aspernatur
    //       maxime sit neque voluptatem.
    //     </p>

    //     <hr />
    //   </div>
  }
}

export default SinglePostPage;
