// controllers/ProductController.js
const CartModel = require('../models/Cart');
const userModel = require('../models/User');
const ProductModel = require('../models/Product');
const connection = require('../models/connection.js');

const cartView = async (req, res) => {
  try {
    // Assuming you have the user ID available in req.user.id after authentication
    const userId = req.params.id;

    // Get the cart items for the user
    const cartItems = await CartModel.getCartItems(userId);

    // Fetch product details for each item in the cart
    const cartWithDetails = await Promise.all(
      cartItems.map(async (cartItem) => {
        const productId = cartItem.productId; // Assuming each cart item has a productId property
        
        // Fetch the product details from the ProductModel based on the productId
        const productDetails = await ProductModel.getProductByName(productId)
        console.log(productDetails)
        return {
          cartItem,
          productDetails,
        };
      })
    );

    res.render('cart', { cart: cartWithDetails });
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
    console.log(Object.values(userId));
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
  CartModel.CalPrice()


};

module.exports = {
  cartView,
  addToCart,
  CheckOut
  // Add other functions
};
