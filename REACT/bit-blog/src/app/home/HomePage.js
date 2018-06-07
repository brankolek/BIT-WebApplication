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

                <h1 className="text-center my-3">Posts</h1>
                <BlogsList
                    blogs={this.state.blogs}
                />

                {/* <h1>POSTS</h1>

                <Link to="/posts">
                    <div>
                        <h2>Title 1 </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, consequatur.</p>
                    </div>
                </Link>
                <div>
                    <h2>Title 1 </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, consequatur.</p>
                </div>
                <div>
                    <h2>Title 1 </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, consequatur.</p>
                </div> */}


            </div>


        );
    }
}

export default HomePage;