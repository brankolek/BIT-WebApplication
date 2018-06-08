import React, {
  Component
} from "react";
import blogsService from "../../services/blogsService";
import { Link } from "react-router-dom"

class OtherBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      other: []
    };
  }

  componentDidMount() {
    blogsService.getBlogsFromAuthor(this.props.userId).then(data => {
      this.setState({
        other: data
      });
    });
  }
  render() {
    return (
      < div >
        <h4> {this.state.other.length} more posts from same author</h4>
        {this.state.other.map((blog) => {


          return (<Link to={`/posts/${blog.id}`} style={{ textDecoration: 'none' }}><p>{blog.title.split(" ").slice(0, Math.ceil(Math.random() * 3)).join(" ")} - {blog.body.slice(0, 100)}</p></Link>)
        })}
      </div>)
  }
}





export default OtherBlogs;