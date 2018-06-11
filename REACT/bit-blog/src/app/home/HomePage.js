import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BlogsList from './BlogsList';
import blogsService from '../../services/blogsService';
import "../styles/homePage.css"
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

            <div className="container-fluid homePage">
                <Link to="/posts/new" >  <p className="text-left text-white">New Blog</p></Link>
                <h1 className="text-center my-3 display-4 text-white">Posts</h1>

                <BlogsList
                    blogs={this.state.blogs}
                />



            </div>


        );
    }
}

export default HomePage;