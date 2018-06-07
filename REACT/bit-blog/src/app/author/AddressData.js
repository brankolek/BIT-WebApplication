import React, {
    Component
} from 'react';
class AddressData extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row">

                <div className="col-8">
                    <div className="my-2">
                        <h1>{this.props.street}</h1>
                        <p>username: {this.props.city}</p>
                        <p>email: {this.props.zip}</p>

                    </div>

                </div>
                <div className="col-4">
                    <img src="http://via.placeholder.com/300" alt="" className="my-3 ml-5" /></div>



            </div>
        );
    }
}

export default AddressData;