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
const addProduct = async (req, res) => {
  const { name, price, category, description, brand, year, color} = req.body;
  results = await ProductModel.getProductByName(name);
  if (results == null) {
    ProductModel.insertProduct(name,price,brand,description,category,color,year);
    res.send("Product Added")
  } 
  else {
    res.send("Product with the same name exists")
  }
};

const removeProduct = (req,res) => {
  const id = req.body;
  results = ProductModel.getProductByName(id);
    if (results.length > 0) {
      console.log("Product  exists");
      ProductModel.removeProduct(id);
      console.log("Product  removed");
    } 
  };

module.exports =  {
  addProductView,
  removeProductView,
  addProduct,
  removeProduct
};