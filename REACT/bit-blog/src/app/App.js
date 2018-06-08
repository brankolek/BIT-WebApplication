import React, { Component } from "react";
import Header from "./partials/Header";
import HomePage from "./home/HomePage";
import Footer from "./partials/Footer";
import { Switch, Route } from "react-router-dom";
import AuthorsPage from "./authors/AuthorsPage";
import AboutPage from "./about/AboutPage";
import SinglePostPage from "./singlePost/SinglePostPage";
import AuthorPage from "./author/AuthorPage";
import CreateBlogPage from "./createBlog/CreateBlogPage";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/posts/new" component={CreateBlogPage} />
          <Route exact path="/posts/:id" component={SinglePostPage} />
          <Route exact path="/authors/:id" component={AuthorPage} />

        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
