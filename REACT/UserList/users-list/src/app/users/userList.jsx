import React, {
    Component
} from 'react';
import './App.css';

import ItemCard from "./itemCard"
import ItemList from "./ItemList"
import usersData from "../../services/userService"


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],

        };
    }

    // componentDidMount() {
    //     usersData.getData().then((data) => {
    //         this.setState({
    //             users: data
    //         })
    //     })
    // }

    // change = () => {
    //     this.setState({
    //         selected: !this.state.selected
    //     })
    // }

    render() {
        return (

            <div className="container" >
                <div className="row">
                    <input type="search" />
                </div>
                <div className="row">

                    {this.props.users.map(user => {

                        if (this.props.selected) {

                            return <ItemList usr={user} />



                        } else {

                            return <ItemCard usr={user} />


                        }




                    }


                    )}

                </div>

            </div>

        );
    }
}

export default UserList;







// const UserList = (props) => {


//     return (


//         <div className="container" >

//             <div className="row">


//                 {props.data.map(user => {

//                     return <ItemList usr={user} />



//                 })}


//             </div>


//         </div>


//     )

// }

// export default UserList



