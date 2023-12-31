const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createProductFeedbackTable = `CREATE TABLE IF NOT EXISTS ProductFeedback (
  id INT AUTO_INCREMENT,
  userId INT NOT NULL,
  productId INT NOT NULL,
  feedback VARCHAR(255) NOT NULL,
  FOREIGN KEY (userId) references mydb.User(id),
  FOREIGN KEY (productId) references mydb.Product(id),
  PRIMARY KEY(id)
)`;

const insertfeedback = async(userId, productId, feedback)=>{
    await pool.query('INSERT INTO ProductFeedback SET ?', {userId: userId, productId: productId, feedback: feedback});
  };
pool.query(createProductFeedbackTable);
console.log('Product table created successfully.');

module.exports = {
    insertfeedback
};