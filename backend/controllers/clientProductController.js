const ProductModel = require('../models/Product');

const showProductByid = async (req, res) => {
  try {
   
    const {p_id} =req.body;
    // Await the resolution of the promise returned by getProductByName
    const product = await ProductModel.getProductByName(p_id);

    if (!product) {
      res.send('Product not found');
    } else {
      res.send( product );
    }
  } catch (error) {
    console.error('Error fetching product by id:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

module.exports = {
  showProductByid
};