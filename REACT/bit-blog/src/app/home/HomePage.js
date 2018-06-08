import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BlogsList from './BlogsList';
import blogsService from '../../services/blogsService';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {

        blogsService.getdata().then(data => {
            this.setState(
                {
                    blogs: data
                }
            )


        })

    }
    render() {
        return (

            <div className="container-fluid">
                <Link to="/posts/new" >  <p className="text-left">New Blog</p></Link>
                <h1 className="text-center my-3 display-4">Posts</h1>

                <BlogsList
                    blogs={this.state.blogs}
                />



            </div>


        );
    }
}

export default HomePage;