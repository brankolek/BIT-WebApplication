import React, {
  Component
} from 'react';

import './App.css';

import Header from './header';
import Footer from './footer';
import UserList from "./userList"
import usersData from "../../services/userService"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selected: false,
      counter: 0
    };
  }

  refresh = () => {
    this.load();
  }
  load() {
    return usersData.getData().then((data) => {
      this.setState({
        users: data
      })
    })


  }
  componentDidMount() {
    this.load()
  }
  change = () => {

    this.setState((prevState) => {

      return {

        selected: !prevState.selected
      }

    })
  }

  render() {
    return (
      <div>

        <Header change={this.change} selected={this.state.selected} refresh={this.refresh} />
        <UserList selected={this.state.selected} users={this.state.users} />

        <Footer />



      </div>
    );
  }
}

export default App;


