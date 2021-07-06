import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  // These methods will update the state properties.
  onChangeUserName(e) {
    this.setState({
        username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
        email : e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
        password: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newcustomer = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3000/customer/add", newcustomer)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      username: "",
      email: "",
      password: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Customer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create customer"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}