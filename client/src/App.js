import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import CreateCustomer from "./components/createCustomer";
import CreateAdmin from "./components/createAdmin";
import CreateProduct from "./components/createProduct";
import CreateCategory from "./components/createCategory";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/createcustomer">
        <CreateCustomer />
      </Route>
      <Route path="/createadmin">
        <CreateAdmin />
      </Route>
      <Route path="/createproduct">
        <CreateProduct />
      </Route>
      <Route path="/createcategory">
        <CreateCategory />
      </Route>
    </div>
  );
};

export default App;