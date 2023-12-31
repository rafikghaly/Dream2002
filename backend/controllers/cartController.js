// controllers/ProductController.js
const CartModel = require('../models/Cart');
const hisModel = require('../models/history');
const userModel = require('../models/User');
const ProductModel = require('../models/Product');

const cartView = async (req, res) => {
  try {
    // Assuming you have the user ID available in req.user.id after authentication
    const userId = await userModel.getid();
    // Get the cart items for the user
    const cartItems = await CartModel.getCartItems(userId[0]['id']);
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

const addToCart = async (req, res) => {
  try {
    const {p_id} = req.body;
    // Assuming that CartModel has a method addToCart that handles the database operations
    const userId= await userModel.getid();
    const existingCartItem = await CartModel.getPRODUCTid(userId[0].id, p_id);
    if (existingCartItem.length) {
      // If the product is already in the cart, update the quantity
      await CartModel.updateCartItemQuantity(userId[0].id, p_id, existingCartItem.quantity + 1);
    } else {
      // If the product is not in the cart, add a new item
      await CartModel.addToCart(userId[0].id, p_id);
    }
    const priceProduct= await ProductModel.getProductPrice(p_id);
    CartModel.updateTotalPrice(userId[0].id,p_id,Object.values(priceProduct));
    res.send('Product added to the cart successfully');
  }
  catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

const removeFromCart = async (req, res) => {
  try {
    const {data} = req.body;
    await CartModel.removeFromCart(data.cartId);
    res.send('Item removed');
  }
  catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

const CheckOut = async (req, res) => {
  CartModel.CalPrice();
  his = hisModel.addtohistory();
};

module.exports = {
  cartView,
  addToCart,
  removeFromCart,
  CheckOut
  // Add other functions
};
