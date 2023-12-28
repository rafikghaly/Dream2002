// const express = require('express');
// const connection = require('../models/connection.js');
// const app = express();
const ProductModel = require('../models/Product');
const prod=(req,res)=>{
    res.render("showproductbycategory");
};

const productView = async (req, res) => {
    try {
        const {cat} = req.body;
        console.log(cat);
        const product = await ProductModel.getProductByCategory(cat);
        console.log(product);
    
        if (!product) {
          res.status(404).send('Category not found');
        } else {
          console.log(product);
          res.render('showProductbycategory', { product });
        }
      } catch (error) {
        console.error('Error fetching product by name:', error);
        res.status(500).send('Internal Server Error: ' + error.message);
      }
   
}

module.exports =  {
    productView,
    prod
};