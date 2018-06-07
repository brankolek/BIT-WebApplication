import React, { Component } from "react";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import Footer from "./partials/Footer";
import AboutPage from "./about/AboutPage";
import UsersPage from "./users/UsersPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={UsersPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
