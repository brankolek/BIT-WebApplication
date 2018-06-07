import React, {
    Component
} from 'react';

class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <li className="list-group-item list-group-item-action ">

                <h2 > {this.props.title} </h2>
                <p> {this.props.text} </p>


            </li>


        );
    }
}

export default BlogItem;