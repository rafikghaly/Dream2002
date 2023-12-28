// controllers/ProductController.js
const ProductModel = require('../models/Product');

const showProductByName = async (req, res) => {
  try {
    const productName = req.params.id;

    // Await the resolution of the promise returned by getProductByName
    const product = await ProductModel.getProductByName(productName);

    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.render('showProduct', { product });
    }
  } catch (error) {
    console.error('Error fetching product by name:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

module.exports = {
  showProductByName,
};
