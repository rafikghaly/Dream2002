// models/Cart.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createAdminTable = `CREATE TABLE IF NOT EXISTS ADMIN (
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    branch VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);`;

const getcredentials = async(email,password)=>{
    const [rows]= await pool.query('SELECT * FROM ADMIN WHERE email = ? AND password = ?',[email,password]);
    return rows.length > 0 ? rows : null;
  }


module.exports = {
    getcredentials
};
pool.query(createAdminTable);
console.log('Client table created successfully.');