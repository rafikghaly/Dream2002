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
  user_id INT,
  feedback VARCHAR(255),
  FOREIGN KEY (user_id) references mydb.User(id),
  PRIMARY KEY(id)
)`;

const addfeed = async (id ,feedback)=>{
  const [rows] =await pool.query('INSERT INTO websitefeedback SET ?',{user_id:id , feedback:feedback});


}
const getid= async()=>{
  const [rows] =await pool.query(' SELECT id FROM User WHERE is_online = TRUE');
  return rows.length > 0 ? rows : null;
}

pool.query(createfeedbackTable);
console.log('Client table created successfully.');

module.exports = {
 addfeed,getid
};

// connection.query(createfeedbackTable, (err, results, fields) => {
//     if (err) throw err;
//     console.log('User table created successfully.');
//   });