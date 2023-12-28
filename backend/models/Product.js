const connection = require('../models/connection.js');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createProductTable = `CREATE TABLE IF NOT EXISTS Product (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  brand VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  color VARCHAR(255) DEFAULT 'Black',
  year YEAR NOT NULL,
  category VARCHAR(255) NOT NULL,
  FOREIGN KEY (category) references mydb.Category(name),
  PRIMARY KEY(id)
)`;

const getProductByName = async (productid) => {
  const [rows] = await pool.query('SELECT * FROM Product WHERE id = ?', [productid]);
  return rows.length > 0 ? rows[0] : null;
};
const getProductByCategory = async(cat) =>{
  const [rows] = await pool.query('SELECT * FROM Product WHERE category =?',[cat]);
  return rows.length > 0 ? rows : null;
};
const insertProduct = async(name, price,brand,description,category,color,year)=>{
  await pool.query('INSERT INTO Product SET ?', { name, price, brand, description, category, color, year });
};
const getProductPrice =async(id)=>{
  const [rows] = await pool.query('SELECT price FROM Product WHERE id = ?', [id]);
  console.log(rows[0]);
  return rows[0];
};
pool.query(createProductTable);
console.log('Product table created successfully.');

module.exports = {
  getProductByName,
  getProductByCategory,
  insertProduct,
  getProductPrice
};

// const createProductTable = `CREATE TABLE IF NOT EXISTS Product (
//     id INT AUTO_INCREMENT,
//     name VARCHAR(255) NOT NULL,
//     brand VARCHAR(255) NOT NULL,
//     description VARCHAR(255) NOT NULL,
//     color VARCHAR(255) DEFAULT 'Black',
//     year YEAR NOT NULL,
//     category VARCHAR(255) NOT NULL,
//     price INT NOT NULL,
//     PRIMARY KEY(id)
//   )`;

// connection.query(createProductTable, (err, results, fields) => {
//     if (err) throw err;
//     console.log('User table created successfully.');
// });