// models/Cart.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createCartTable = `CREATE TABLE IF NOT EXISTS mydb.Cart (
    id INT AUTO_INCREMENT,
    userId INT NOT NULL,
    productId INT NOT NULL,
    quantity INT  DEFAULT 1,
    totalPrice INT DEFAULT 0 ,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES mydb.User(id),
    FOREIGN KEY (productId) REFERENCES mydb.Product(id)
  );`;

const addToCart = async (userId, productId) => {
  const [result] = await pool.query('INSERT INTO Cart (userId, productId) VALUES (?, ?)', [userId, productId]);
  return result.insertId;
};

const removeFromCart = async (id) => {
  await pool.query('DELETE FROM Cart WHERE userId = ?', [id]);
}

const getCartItems = async (userId) => {
  const [rows] = await pool.query('SELECT * FROM Cart WHERE userId = ?', [userId]);
  return rows;
};

const getPRODUCTid= async (userId, productId) => {

const [rows] = await pool.query('SELECT * FROM Cart WHERE userId = ? AND productId = ?', [userId, productId]); 
  return rows;
} 
const updateTotalPrice =async (userId,productId,price)=>{
  await pool.query('UPDATE Cart SET totalPrice = totalPrice + ?  WHERE productId = ? AND userId = ?',[price,productId,userId]);
}

const updateCartItemQuantity = async (userId, productId) => {
  await pool.query('UPDATE Cart SET quantity = quantity+1  WHERE userId = ? AND productId = ?' , [userId, productId]);    
}
const CalPrice = async(userId)=>{
  const rows= await pool.query('SELECT SUM(totalPrice) FROM cart WHERE userId = ? ',[userId]);
  return rows.length>0 ? rows : null;
}

  pool.query(createCartTable);
  console.log('cart table created successfully.');

module.exports = {
  addToCart,
  removeFromCart,
  getCartItems,
  getPRODUCTid,
  updateCartItemQuantity,
  updateTotalPrice,CalPrice
  // Add other functions
};
