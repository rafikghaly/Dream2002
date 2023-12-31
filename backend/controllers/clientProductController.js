const userModel = require('../models/User');
const ProductModel = require('../models/Product');
const ProductFeedbackModel = require('../models/ProductFeedback');

const showProductByid = async (req, res) => {
  try {
    const {p_id} =req.body;
    const product = await ProductModel.getProductByName(p_id);

    if (!product) {
      res.send('Product not found');
    } else {
      res.send( product );
    }
  } 
  catch (error) {
    console.error('Error fetching product by id:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

const addProductFeedback = async (req, res) => {
  try{
    const {p_id, feedback} =req.body;
    const userId = await userModel.getid();
    await ProductFeedbackModel.insertfeedback(userId[0]['id'],p_id,feedback);
    res.send("Feedback sent");
  }
  catch (error) {
    console.error('Error sending feedback:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
}


module.exports = {
  showProductByid,
  addProductFeedback
};