const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createHistoryTable = `CREATE TABLE IF NOT EXISTS mydb.History (
  id INT AUTO_INCREMENT,
  userId INT NOT NULL,
  productId INT NOT NULL,
  quantity INT  DEFAULT 1,
  totalPrice INT DEFAULT 0 ,
  PRIMARY KEY(id),
  FOREIGN KEY (userId) REFERENCES mydb.User(id),
  FOREIGN KEY (productId) REFERENCES mydb.Product(id)
  )`;

  // FOREIGN KEY (pid) references mydb.product(id),
  const addtohistory = async (id) => {
    const [result] = await pool.query(`
      INSERT INTO History (userId, productId, quantity, totalPrice)
      SELECT userId, productId, quantity, totalPrice FROM Cart
      WHERE userId = ?
    `, [id]);
  
    return result;
  }
  

  const getproduct = async (id) => {
    const [rows] = await pool.query(`SELECT * FROM History WHERE userId = ?`, [id]);
    return rows.length > 0 ? rows : null;
}

pool.query(createHistoryTable);
console.log('his table created successfully.');

module.exports = {
    getproduct,
    addtohistory
};