const express = require("express");

// customerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const customerRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");


// This section will help you create a new customer
customerRoutes.route("/customer/add").post(function (req, res) {
  let db_connect = dbo.getDb("customer");
  let myobj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  db_connect.collection("customer").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

module.exports = customerRoutes;