import React, { Component } from "react";

import PersonalData from "./PersonalData";
import AddressData from "./AddressData";
import authorService from "../../services/authorsService";
import CompanyData from "./CompanyData";

class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null
    };
  }

  componentDidMount() {
    authorService.getUserData(this.props.match.params.id).then(data => {
      this.setState({
        author: data
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.author ? (
          <div>
            <PersonalData
              name={this.state.author.name}
              username={this.state.author.username}
              email={this.state.author.email}
              phone={this.state.author.phone}
            />
            <AddressData
              street={this.state.author.address.street}
              city={this.state.author.address.city}
              zip={this.state.author.address.zipcode}
            />
            <CompanyData
              companyName={this.state.author.company.name}
              slogan={this.state.author.company.catchPhrase}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default AuthorPage;
