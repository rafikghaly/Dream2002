// controllers/ProductController.js
const CartModel = require('../models/Cart');
const hisModel = require('../models/history');
const userModel = require('../models/User');
const ProductModel = require('../models/Product');
const connection = require('../models/connection.js');
const { json } = require('express');

const cartView = async (req, res) => {
  console.log('cartView');

  try {
    // Assuming you have the user ID available in req.user.id after authentication
    // const userId = req.params.id;
    const userId = await userModel.getid();
    //console.log(userId[0]['id']);
    // Get the cart items for the user
    const cartItems = await CartModel.getCartItems(userId[0]['id']);
    //console.log(cartItems);

    // Fetch product details for each item in the cart
    const cartWithDetails = await Promise.all(
      cartItems.map(async (cartItem) => {
        const productId = cartItem.productId; // Assuming each cart item has a productId property
        
        // Fetch the product details from the ProductModel based on the productId
        const productDetails = await ProductModel.getProductByName(productId)
       // console.log(productDetails)
        return {
          cartItem,
          productDetails,
        };
      })
    );
    //console.log(cartWithDetails);
    const resultList= cartWithDetails.map(item => ({
      id: item.cartItem.id,
      name: item.productDetails.name,
      price: item.productDetails.price,
      category:item.productDetails.category
    }));
    //console.log(resultList);
    //price ,product name, id product ,category
    
    res.send(JSON.stringify(resultList));
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send('Internal Server Error');
  }
};

const addToCart = async (req, res) => {
  console.log("1111");
  try {
    //nzabt el id yegy menan!!!!
    const productId = req.body.productId;
    // Assuming that CartModel has a method addToCart that handles the database operations
    const userId= await userModel.getid();
    // console.log(Object.values(userId));
    const existingCartItem = await CartModel.getPRODUCTid(Object.values(userId), productId);
      if (existingCartItem.length) {
        // If the product is already in the cart, update the quantity
        await CartModel.updateCartItemQuantity(Object.values(userId), productId, existingCartItem.quantity + 1);
      } else {
        // If the product is not in the cart, add a new item
        await CartModel.addToCart(Object.values(userId), productId);
      }
      const priceProduct= await ProductModel.getProductPrice(productId);
     //console.log(Object.values(priceProduct));
      CartModel.updateTotalPrice(Object.values(priceProduct),productId,Object.values(priceProduct));
      res.status(200).send('Product added to the cart successfully');
  
    }
  catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

const CheckOut = async (req, res) => {
  CartModel.CalPrice();
  his = hisModel.addtohistory();
  console.log(his);
};

module.exports = {
  cartView,
  addToCart,
  CheckOut
  // Add other functions
};
