// const express = require('express');
// const connection = require('../models/connection.js');
// const app = express();
const ProductModel = require('../models/Product');
const prod=(req,res)=>{
  //console.log('gowa el prod');
    res.send('ok');
};

const productView = async (req, res) => {
  //console.log('da5lt el function')
    try {
        const cat = req.body.dataToSend;
        //console.log(cat);
        const product = await ProductModel.getProductByCategory(cat);
       // console.log(product);

        if (!product) {
          res.status(404).send('Category not found');
        } else {
          //console.log(product);
          return res.send(product);
          //res.render('showProductbycategory', { product });
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