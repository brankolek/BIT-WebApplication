import React, {
    Component
} from 'react';
import {
    blogsUrl
} from "../../shared/constant"
import PersonalData from './PersonalData';
import AddressData from './AddressData';



class AuthorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null
        };
    }

    componentDidMount() {
        fetch(`${blogsUrl}/users/${this.props.match.params.id}`).then((response) => {
            return response.json()
        }).then((data) => {

            this.setState(
                {
                    author: data
                }
            )
        })

    }
    render() {
        return (

            <div>

                {/* // <h1>{this.props.match.params.id}</h1>
                // <h1>{this.state.author.name}</h1>
                // <h1>{this.state.author.username}</h1> */}
                {/* {this.state.author ? } */}
                <PersonalData
                    name={this.state.author.name}
                    username={this.state.author.username}
                    email={this.state.author.email}
                    phone={this.state.author.phone}
                />
                <AddressData
                    street={this.state.author.address.street}
                    city={this.state.author.address}
                    zip={this.state.author.address}

                />
                {/* <CompanyData /> */}
            </div>


        );
    }
}

export default AuthorPage;