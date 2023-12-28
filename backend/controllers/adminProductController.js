const express = require('express');
const connection = require('../models/connection.js');
const ProductModel = require('../models/Product');
// For Adding Product Page
const addProductView = (req, res) => {
    res.render("addProduct");
}

// For Removing Product View 
const removeProductView = (req, res) => {
    res.render("removeProduct");
}

// For Adding Product
const addProduct = (req, res) => {
    const { name, price, category, description, brand, year, color} = req.body;
  
    // Check for empty fields
    if (!name || !price || !category || !description || !brand || !year || !color) {
      console.log("Fill empty fields");
    } else {
      // Validation
      results = ProductModel.getProductByName(name);
        if (results.length > 0) {
          console.log("Product with the same name exists");
          res.render("addProduct", {
            name,
            brand,
            description,
            category,
            color,
            year,
          });
        } else {
          // Insert the product into the database
          ProductModel.insertProduct(name,price,brand,description,category,color,year);
              res.redirect("/showproductbycategory");
            }

        }

    };

  module.exports =  {
    addProductView,
    removeProductView,
    addProduct
};