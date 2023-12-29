const connection = require('../models/connection.js');
const user = require('../models/User.js');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createHistoryTable = `CREATE TABLE IF NOT EXISTS History (
    hid INT AUTO_INCREMENT,
    userid INT NOT NULL,
    pid INT NOT NULL,
    FOREIGN KEY (userid) references User(id),
    FOREIGN KEY (pid) references product(id),
    PRIMARY KEY(hid)
  )`;

  // FOREIGN KEY (pid) references mydb.product(id),
  const addtohistory = async (id,pid) => {
    const [result] = await pool.query('INSERT INTO History (userid, pid) VALUES (?, ?)', [id, pid]);
    return result;
  }

  const getproduct = async (id) => {
    console.log("ana goa getproducttt MODEELLLL");
    const [rows] = await pool.query(`SELECT Product.* FROM Product JOIN History ON Product.id = History.pid WHERE History.userid = ?`, [id]);
    console.log("ana b3d rows--> rows print: ");
    console.log(rows);
    return rows.length > 0 ? rows : null;
}

pool.query(createHistoryTable);
console.log('his table created successfully.');

module.exports = {
    getproduct,
    addtohistory
};