import React, {
    Component
} from 'react';

import AuthorItem from "./AuthorItem"

class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div >
            <ul className="list-group list-group-flush" >

                {
                    this.props.authors.map((author) => {
                        return (

                            <AuthorItem
                                name={author.name}
                                id={author.id}
                            />
                        )

                    })
                }

            </ul>


        </div >
        );
    }
}

export default AuthorList;