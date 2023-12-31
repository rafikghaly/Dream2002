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
  const add =async(name,email,password)=>{
    await pool.query('INSERT INTO User SET ?', {name: name, email: email, password: password});
    return null;
  }
  const checkPass= async(email)=>{
  const [rows]=await pool.query('SELECT password FROM User WHERE email = ?', [email]);
  return rows.length > 0 ? rows : null;
  }
  const update =async(email)=>{
    await pool.query('UPDATE User SET is_online = TRUE WHERE email = ?', [email]);
  }
  const logoutt =async()=>{
    await pool.query('UPDATE User SET is_online = FALSE WHERE is_online = TRUE');
  }
  const getemail = async()=>{
    const [rows]= await pool.query('SELECT email FROM User WHERE is_online = TRUE');
    return rows.length > 0 ? rows : null;
  }
  const getusers=async()=>{
    const[rows]=await pool.query('SELECT * FROM User WHERE is_online = TRUE');
    //console.log(rows);
    return rows.length > 0 ? rows : null;
  }
  const getid = async()=>{
    const [rows]= await pool.query('SELECT id FROM User WHERE is_online = TRUE');
    return rows.length > 0 ? rows : null;
  }
  const updatename =async(name)=>{
  await pool.query('UPDATE User SET name =?  WHERE is_online = TRUE',[name])
  }
  const updateemail=async(email)=>{
    await pool.query('UPDATE User SET email =?  WHERE is_online = TRUE',[email])
  }
  const updatelocation =async(location,id)=>{
    await pool.query('UPDATE User SET location =?  WHERE is_online = TRUE AND id=?',[location,id])
  }

  pool.query(createUserTable);
  console.log('Client table created successfully.');

  module.exports = {
  validate,
  add,checkPass,
  update,logoutt,getemail,getusers,getid,
  updatename,updateemail,updatelocation
  };