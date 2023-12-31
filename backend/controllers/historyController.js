const historyModel = require('../models/history');
const connection = require('../models/connection.js');
const userModel = require('../models/User');
const ProductModel = require('../models/Product');

const showhistory = async (req, res) => {
  try {
    // Assuming you have the user ID available in req.user.id after authentication
    const userId = await userModel.getid();
    // Get the cart items for the user
    const cartItems = await historyModel.getproduct(userId[0]['id']);
    // Fetch product details for each item in the cart
    const cartWithDetails = await Promise.all(
      cartItems.map(async (cartItem) => {
        // Assuming each cart item has a productId property
        const productId = cartItem.productId;
        // Fetch the product details from the ProductModel based on the productId
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