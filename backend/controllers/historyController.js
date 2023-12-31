const historyModel = require('../models/history');
const connection = require('../models/connection.js');
const userModel = require('../models/User');
const ProductModel = require('../models/Product');

const showhistory = async (req, res) => {
  try {
    // Hat el model el awel
    const userId = await userModel.getid();
    // hat el list
    const cartItems = await historyModel.getproduct(userId[0]['id']);
    // hat el product details
    const cartWithDetails = await Promise.all(
    cartItems.map(async (cartItem) => {
    const productId = cartItem.productId;
    const productDetails = await ProductModel.getProductByName(productId)
    return {
          cartItem,
          productDetails,
        };
      })
    );

    const resultList= cartWithDetails.map(item => ({
      cartId:item.cartItem.id,
      id: item.productDetails.id,
      name: item.productDetails.name,
      quantity: item.cartItem.quantity,
      price: item.cartItem.totalPrice,
      category:item.productDetails.category
    }));
    
    res.send(JSON.stringify(resultList));
  } 
  catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send('Internal Server Error');
  }
};
module.exports = {
    showhistory
  };