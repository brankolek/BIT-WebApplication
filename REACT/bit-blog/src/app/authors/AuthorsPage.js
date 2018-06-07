import React, { Component } from 'react';
import authorsService from '../../services/authorsService';
import AuthorsList from "./AuthorsList";





class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }
    componentDidMount() {

        authorsService.getdata().then(data => {
            this.setState(
                {
                    authors: data
                }
            )


        })

    }
    render() {
        return (

            <div >


                <h1 className="text-center">AUTHORS</h1>
                <AuthorsList

                    authors={this.state.authors}
                />

            </div>

        );
    }
}

export default Author;