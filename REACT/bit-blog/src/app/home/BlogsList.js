import React, { Component } from 'react';

import BlogItem from "./BlogItem"

class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">

                    {
                        this.props.blogs.map((blog) => {
                            return (

                                <BlogItem id={blog.id} title={blog.title} text={blog.text} />
                            )

                        })
                    }

                </ul>


            </div >
        );
    }
}

export default BlogsList;


