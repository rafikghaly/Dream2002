const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'newuser',
  password: 'MinaMinaMina',
  database: 'mydb',
});

const createCategoryTable = `CREATE TABLE IF NOT EXISTS Category (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
)`;

const getCategory = async(category)=>{
    const [rows] = await pool.query('SELECT * FROM category WHERE name = ?', [category]);
    return rows.length > 0 ? rows : null;

}
const insertCategory = async (names)=>{
    await pool.query('INSERT INTO category SET ?', {name:names});

}
// Add other functions
module.exports = {
    getCategory,insertCategory
};