import React, {
    Component
} from 'react';
import { Link } from "react-router-dom";

class AuthorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <li className="list-group-item list-group-item-action ">
                <Link to={`/authors/${this.props.id}`}>
                    <p> {this.props.name} </p>
                </Link>



            </li >


        );
    }
}

export default AuthorItem;