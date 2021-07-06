import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeCreatedBy = this.onChangeCreatedBy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    
    this.state = {
      name: "",
      price: "",
      stock: "",
      description: "",
      imageurl: "",
      categoryname: "",
      adminusername: "",
    };
  }

  // These methods will update the state properties.
  onChangeName(e) {
    this.setState({
        name: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
        price : e.target.value,
    });
  }

  onChangeStock(e) {
    this.setState({
        stock: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value,
    });
  }

  onChangeImageUrl(e) {
    this.setState({
        imageurl: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
        categoryname: e.target.value,
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
    const newproduct = {
      name: this.state.name,
      price: this.state.price,
      stock: this.state.stock,
      description: this.state.description,
      imageurl: this.state.imageurl,
      categoryname: this.state.categoryname,
      adminusername: this.state.adminusername,
    };

    axios
      .post("http://localhost:3000/product/add", newproduct)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
        name: "",
        price: "",
        stock: "",
        description: "",
        imageurl: "",
        categoryname: "",
        adminusername: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Price </label>
            <input
              type="number"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>
          <div className="form-group">
            <label>Stock </label>
            <input
              type="number"
              className="form-control"
              value={this.state.stock}
              onChange={this.onChangeStock}
            />
          </div>
          <div className="form-group">
            <label>Description </label>
            <textarea 
                className="form-control"
                rows="4" 
                value={this.state.description}
                onChange={this.onChangeDescription}
                cols="50"> 
            </textarea>
            {/* <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            /> */}
          </div>
          <div className="form-group">
            <label>Image URL </label>
            <input
              type="text"
              className="form-control"
              value={this.state.imageurl}
              onChange={this.onChangeImageUrl}
            />
          </div>
          <div className="form-group">
            <label>Category </label>
            <input
              type="text"
              className="form-control"
              value={this.state.categoryname}
              onChange={this.onChangeCategory}
            />
          </div>
          <div className="form-group">
            <label>Created By </label>
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
              value="Create Product"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}