import React, { Component } from "react";
class AddressData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="my-2 ml-5">
            <h1>Address</h1>
            <p>Street:{this.props.street}</p>
            <p>City: {this.props.city}</p>
            <p>Zip Code: {this.props.zip}</p>
          </div>
        </div>
        <div className="col-4">
          <img
            src="https://docs.microsoft.com/en-us/power-bi/media/power-bi-visualization-arcgis/power-bi-esri-placeholder2new.png"
            alt=""
            className="my-3 "
          />
        </div>
      </div>
    );
  }
}

export default AddressData;
