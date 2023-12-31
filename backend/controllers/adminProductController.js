const ProductModel = require('../models/Product');

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
      ProductModel.removeProduct(id);
    } 
  };

module.exports =  {
  addProduct,
  removeProduct
};