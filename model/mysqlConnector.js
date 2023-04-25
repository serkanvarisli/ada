const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "adacase",
});
console.log("SQL ile Bağlantı başarılı");
module.exports = pool.promise();
