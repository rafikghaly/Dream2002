const express = require('express');
const app = express();
const cors = require('cors');
const loginController = require('./controllers/loginController');
const contactUsController = require('./controllers/contactUsController');
const historyController = require('./controllers/historyController');
const cartController = require('./controllers/cartController');
const showproduct =require('./controllers/showproductController');
const promotions =require('./controllers/HomeController');
const productinfo =require('./controllers/clientProductController');
const clientinfo =require('./controllers/clientinfoController');
const adminControl =require('./controllers/adminProductController');
const category =require('./controllers/categoryController');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Zawedo wa7da wa7da
app.post('/login',loginController.LoginSignup)
app.get('/login',loginController.logout)
app.get('/contactUs',contactUsController.ContactUsView)
app.post('/showproduct',showproduct.productView);
app.post('/contactUs',contactUsController.ContactUsUpdate);
app.get('/cart',cartController.cartView);
app.get('/checkout',cartController.CheckOut);
app.post('/cartadd',cartController.addToCart)
app.post('/cartremove',cartController.removeFromCart)
app.get('/Home',promotions.Home);
app.post('/productInfo',productinfo.showProductByid);
app.post('/submitFeedback',productinfo.addProductFeedback)
app.get('/user_info',clientinfo.ClientinfoView);
app.post('/user_info',clientinfo.clientupdate);
app.post('/adminAddProduct',adminControl.addProduct);
app.post('/addCategory',category.addCategory);
app.get('/history',historyController.showhistory);


const PORT = process.env.PORT || 4111;
app.listen(PORT, () => {
  console.log("Server has started at port " + PORT);
});

process.on('exit', () => {
  console.log("Closing database connection...");
  connection.end((err) => {
    if (err) {
      console.error("Error closing the database connection:", err);
    } else {
      console.log("Database connection closed.");
      process.exit();
    }
  });
});
