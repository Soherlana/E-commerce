import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCreatedBy = this.onChangeCreatedBy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      adminusername: "",
    };
  }

  // These methods will update the state properties.
  onChangeName(e) {
    this.setState({
        name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
        description : e.target.value,
    });
  }

  onChangeCreatedBy(e) {
    this.setState({
        adminusername: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newcategory = {
      name: this.state.name,
      description: this.state.description,
      adminusername: this.state.adminusername,
    };

    axios
      .post("http://localhost:3000/category/add", newcategory)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
        name: "",
        description: "",
        adminusername: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Category</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Created By</label>
            <input
              type="text"
              className="form-control"
              value={this.state.adminusername}
              onChange={this.onChangeCreatedBy}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create category"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}