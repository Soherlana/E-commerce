const express = require("express");

// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");


// This section will help you create a new customer
productRoutes.route("/product/add").post(function (req, res) {
  let db_connect = dbo.getDb("product");
  let myobj = {
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    description: req.body.description,
    productPic: [
        {img: req.body.imageurl}
    ],
    category: req.body.categoryname,
    createdBy: req.body.adminusername
  };
  db_connect.collection("product").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

module.exports = productRoutes;