import React, {
  Component
} from 'react';

import './App.css';

import Header from './header';
import Footer from './footer';
import UserList from "./userList"
import usersData from "../../services/userService"
import SearchBar from './searchBar';
import About from '../about/aboutPage';
import { Switch, Route, Redirect } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selected: localStorage.getItem("shape"),
      counter: 0,
      searchString: "",

    };
  }


  handlerSearch = (event) => {


    this.setState({

      searchString: event.target.value
    })


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
    localStorage.setItem("shape", !this.state.selected)
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

        <Switch>

          <Route exact path='/'
            render={(props) => <UserList {...props} selected={this.state.selected} users={this.state.users} searchString={this.state.searchString} />}
          />

          <Route path='/about' component={About} />
        </Switch>


        <Footer />



      </div>
    );
  }
}

export default App;


