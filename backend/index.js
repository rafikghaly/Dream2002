const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const loginController = require('./controllers/loginController');
const contactUsController = require('./controllers/contactUsController');
const historyController = require('./controllers/historyController');
const bodyParser = require('body-parser');
const cartController = require('./controllers/cartController');
const clientProductController = require('./controllers/clientProductController');

app.set('view engine', 'ejs');

// Use bodyParser middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a default route to redirect to the login page
// app.get('/', (req, res) => {
//   res.redirect('/cart');
// });

// app.get('/', (req, res) => {
//   // Redirect to the product details page for iPhone
//   res.redirect('/');
// });

// Route to show product details by name
//app.get('/:id', cartController.cartView);

app.use(cors());
app.post('/login',loginController.LoginSignup);
app.get('/contactUs',contactUsController.ContactUsView);
app.post('/contactUs',contactUsController.ContactUsUpdate);
//app.get('/cart',cartController.addToCart);
app.get('/cart',cartController.CheckOut);
//app.get('/his',historyController.showhistory);

 
// Route to show product details by name
// app.get('/products/:id', clientProductController.showProductByName);
// Routes

// app.use('/', require('./routes/login'));
// app.use('/', require('./routes/clientinfo'));
// app.use('/', require('./routes/ContactUs'));
// app.use('/', require('./routes/adminProduct'));
// app.use('/', require('./routes/clientProduct'));
// app.use('/',require('./routes/showproduct'));
// app.use('/',require('./routes/cart'));
// app.use('/',require('./routes/category'));

const PORT = process.env.PORT || 4111;
app.listen(PORT, () => {
  console.log("Server has started at port " + PORT);
});

// Close the database connection when the application exits
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
