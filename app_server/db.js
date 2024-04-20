const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'D6_Akshata_83773',
  password: 'akshata83773',
  port: 3306,
  database: 'AkshataDB',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
