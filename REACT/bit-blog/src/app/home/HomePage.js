import React, { Component } from 'react';
import { Link } from "react-router-dom";
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (

            <div >

                <h1>POSTS</h1>

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
                </div>


            </div>


        );
    }
}

export default HomePage;