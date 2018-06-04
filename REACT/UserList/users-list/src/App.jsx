import React, {
  Component
} from 'react';

import './App.css';

import Header from './header';
import Footer from './footer';

import usersData from './data';
import UserList from "./userList"

const App = () => {

  return (

    <div>

      <Header />
      <UserList data={usersData} />

      <Footer />



    </div>
  )
}
export default App;