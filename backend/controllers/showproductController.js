const ProductModel = require('../models/Product');
const prod=(req,res)=>{
    res.send('ok');
};

const productView = async (req, res) => {
  try {
    const cat = req.body.dataToSend;
    const product = await ProductModel.getProductByCategory(cat);

    if (!product) {
      res.status(404).send('Category not found');
    } else {
      return res.send(product);
    }
  } 
  catch (error) {
    console.error('Error fetching product by name:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
}

module.exports =  {
    productView,
    prod
};