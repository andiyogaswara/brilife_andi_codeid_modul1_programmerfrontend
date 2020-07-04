var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "andi",
  database: "db_keluarga_berencana",
});

con.connect(function (err) {
  if (err) throw err;
});

module.exports = con;
