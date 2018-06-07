import React, {
    Component
} from 'react';
class PersonalData extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <img src="http://via.placeholder.com/300" alt="" className="my-3 ml-5" /></div>
                <div className="col-8">
                    <div className="my-2">
                        <h1>{this.props.name}</h1>
                        <p>username: {this.props.username}</p>
                        <p>email: {this.props.email}</p>
                        <p>phone: {this.props.phone}</p>
                    </div>

                </div>



            </div>
        );
    }
}

export default PersonalData;