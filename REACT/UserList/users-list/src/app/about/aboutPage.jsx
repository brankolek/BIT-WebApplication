import React, { Component } from "react";
import HeaderAbout from "../partials/HeaderAbout";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HeaderAbout />
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          repellendus delectus est aut voluptate veniam dolorem optio deleniti
          dignissimos voluptatem corrupti fugit esse dolore iusto inventore
          illum, officia fuga nam eos. Numquam perferendis id mollitia
          voluptatem doloremque non quis? Architecto, nesciunt. Doloremque
          laborum corrupti deleniti incidunt recusandae nulla, quibusdam
          excepturi.
        </p>
        <h2>What we do</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          repellendus delectus est aut voluptate veniam dolorem optio deleniti
          dignissimos voluptatem corrupti fugit esse dolore iusto inventore
          illum, officia fuga nam eos. Numquam perferendis id mollitia
          voluptatem doloremque non quis? Architecto, nesciunt. Doloremque
          laborum corrupti deleniti incidunt recusandae nulla, quibusdam
          excepturi.
        </p>
      </div>
    );
  }
}

export default AboutPage;
