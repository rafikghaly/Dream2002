const connection = require('./connection.js');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createfeedbackTable = `CREATE TABLE IF NOT EXISTS WebsiteFeedback(
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  feedback VARCHAR(255),
  PRIMARY KEY(id)
)`;

const addfeed = async (name ,email ,feedback)=>{
  const [rows] =await pool.query('INSERT INTO websitefeedback SET ?',{name:name ,email:email ,feedback:feedback});
}

pool.query(createfeedbackTable);
console.log('Client table created successfully.');

module.exports = {
 addfeed
};