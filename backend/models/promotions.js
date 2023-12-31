const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createPromotionsTable = `CREATE TABLE IF NOT EXISTS Promotions (
  id INT AUTO_INCREMENT,
  pid INT NOT NULL,
  FOREIGN KEY (pid) references mydb.Product(id),
  PRIMARY KEY(id)
)`;


pool.query(createPromotionsTable);
console.log('Product table created successfully.');


const getHome =async()=>{
    const [rows] = await pool.query(`SELECT Product.* 
    FROM Product 
    LEFT JOIN Promotions ON Product.id = Promotions.pid 
    WHERE Promotions.pid IS NOT NULL;
     `);

    return rows;
  };

module.exports = {
    getHome
};

