import React, { Component } from "react";
class CompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="my-2 ml-5">
            <h1>Company</h1>
            <p>name: {this.props.companyName}</p>
            <p>slogan: {this.props.slogan}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyData;
