const connection = require('../models/connection.js');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

// Define the User table
const createUserTable = `CREATE TABLE IF NOT EXISTS User (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  location VARCHAR(255) DEFAULT 'Borkyna Fasio',
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_online BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
)`;
const validate = async(email)=>{
  const [rows]= await pool.query( 'SELECT * FROM User WHERE email = ?', [email]);
  return rows.length > 0 ? rows : null;
}
const add =async(name,email,location,password)=>{
  await pool.query('INSERT INTO User SET ?', {name: name, email: email, location: location, password: password});
  return null;
}
const checkPass= async(email)=>{
const [rows]=await pool.query('SELECT password FROM User WHERE email = ?', [email]);
return rows.length > 0 ? rows : null;
}
const update =async(email)=>{
  await pool.query('UPDATE User SET is_online = TRUE WHERE email = ?', [email]);
}
const getusers=async()=>{
  const[rows]=await pool.query('SELECT * FROM User WHERE is_online = TRUE');
  console.log(rows);
  return rows.length > 0 ? rows : null;
}
const getid = async()=>{
  const [rows]= await pool.query('SELECT id FROM User WHERE is_online = TRUE');
  return rows;
}
const updatename =async(name,id)=>{
 await pool.query('UPDATE User SET name =?  WHERE is_online = TRUE AND id=?',[name,id])
}
const updateemail=async(email,id)=>{
  await pool.query('UPDATE User SET email =?  WHERE is_online = TRUE AND id=?',[email,id])
 }
 const updatelocation =async(location,id)=>{
  await pool.query('UPDATE User SET location =?  WHERE is_online = TRUE AND id=?',[location,id])
 }

pool.query(createUserTable);
console.log('Client table created successfully.');

module.exports = {
 validate,
 add,checkPass,
 update,getusers,getid,
 updatename,updateemail,updatelocation
};

// Create the User table
// connection.query(createUserTable, (err, results, fields) => {
//   if (err) throw err;
//   console.log('User table created successfully.');
// });