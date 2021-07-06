const express = require("express");

// categoryRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const categoryRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");


// This section will help you create a new customer
categoryRoutes.route("/category/add").post(function (req, res) {
  let db_connect = dbo.getDb("category");
  let myobj = {
    name: req.body.name,
    description: req.body.description,
    createdBy: req.body.adminusername,
  };
  db_connect.collection("category").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

module.exports = categoryRoutes;